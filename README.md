# QuantumIDE - Futuristic Online Code Editor

QuantumIDE is a sleek, futuristic online integrated development environment (IDE) for Python, C/C++, and Java. It features a modern UI with a cyberpunk-inspired design and provides a seamless coding experience.

![QuantumIDE Screenshot](https://placeholder-for-screenshot.com)

## Features

- **Multi-language Support**: Write and execute code in Python, C/C++, and Java
- **Futuristic UI**: Sleek, neon-accented interface with a cyberpunk aesthetic
- **Syntax Highlighting**: Powered by CodeMirror for accurate and beautiful code display
- **Code Templates**: Quick-start with pre-built templates for common tasks
- **Real-time Execution**: Run your code and see results instantly
- **Responsive Design**: Works on desktop and tablet devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Customizable Settings**: Adjust font size, theme, and more

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Python Flask
- **Code Editing**: CodeMirror
- **Styling**: Custom CSS with animations and modern design principles
- **Icons**: Font Awesome

## Setup and Installation

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)
- For C/C++ execution: g++ compiler
- For Java execution: JDK (Java Development Kit)

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/quantum-ide.git
   cd quantum-ide
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Usage

1. **Select a Language**: Choose between Python, C/C++, or Java using the sidebar buttons
2. **Write Code**: Use the editor to write your code
3. **Run Code**: Click the "Run" button to execute your code
4. **View Output**: See the results in the output panel
5. **Try Templates**: Use the template buttons to load example code

## Customization

You can customize the IDE by:

1. Adjusting settings via the gear icon
2. Toggling between dark and light themes
3. Changing the font size
4. Selecting different editor themes

## Security Considerations

This IDE executes code on the server. In a production environment, you should:

- Implement proper sandboxing
- Add user authentication
- Set execution time and memory limits
- Sanitize all inputs and outputs

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- CodeMirror for the code editing component
- Font Awesome for the icons
- The cyberpunk aesthetic community for design inspiration