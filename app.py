from flask import Flask, render_template, request, jsonify
import subprocess
import os
import tempfile
import uuid

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/execute', methods=['POST'])
def execute_code():
    data = request.json
    code = data.get('code', '')
    language = data.get('language', 'python')
    
    # Create a unique ID for this execution
    execution_id = str(uuid.uuid4())
    
    # Create temporary directory for code execution
    temp_dir = tempfile.mkdtemp()
    
    result = {
        'output': '',
        'error': '',
        'execution_time': 0
    }
    
    try:
        if language == 'python':
            # Save code to a temporary file
            file_path = os.path.join(temp_dir, f"{execution_id}.py")
            with open(file_path, 'w') as f:
                f.write(code)
            
            # Execute the code
            process = subprocess.Popen(
                ['python', file_path],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            stdout, stderr = process.communicate(timeout=10)
            
            result['output'] = stdout
            result['error'] = stderr
            
        elif language == 'java':
            # Save code to a temporary file
            # Extract class name from code
            class_name = "Main"  # Default class name
            for line in code.split('\n'):
                if "public class" in line:
                    class_name = line.split("public class")[1].split("{")[0].strip()
                    break
            
            file_path = os.path.join(temp_dir, f"{class_name}.java")
            with open(file_path, 'w') as f:
                f.write(code)
            
            # Compile the code
            compile_process = subprocess.Popen(
                ['javac', file_path],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            compile_stdout, compile_stderr = compile_process.communicate(timeout=10)
            
            if compile_stderr:
                result['error'] = compile_stderr
            else:
                # Execute the compiled code
                execute_process = subprocess.Popen(
                    ['java', '-cp', temp_dir, class_name],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True
                )
                stdout, stderr = execute_process.communicate(timeout=10)
                
                result['output'] = stdout
                result['error'] = stderr
                
        elif language == 'cpp':
            # Save code to a temporary file
            file_path = os.path.join(temp_dir, f"{execution_id}.cpp")
            executable_path = os.path.join(temp_dir, execution_id)
            
            with open(file_path, 'w') as f:
                f.write(code)
            
            # Compile the code
            compile_process = subprocess.Popen(
                ['g++', file_path, '-o', executable_path],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            compile_stdout, compile_stderr = compile_process.communicate(timeout=10)
            
            if compile_stderr:
                result['error'] = compile_stderr
            else:
                # Execute the compiled code
                execute_process = subprocess.Popen(
                    [executable_path],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True
                )
                stdout, stderr = execute_process.communicate(timeout=10)
                
                result['output'] = stdout
                result['error'] = stderr
    
    except subprocess.TimeoutExpired:
        result['error'] = "Execution timed out after 10 seconds."
    except Exception as e:
        result['error'] = str(e)
    finally:
        # Clean up temporary files
        try:
            import shutil
            shutil.rmtree(temp_dir)
        except:
            pass
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)