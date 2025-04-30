// Futuristic IDE JavaScript

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize CodeMirror editor
    const codeEditor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
        mode: 'python',
        theme: 'dracula',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true,
        extraKeys: {"Tab": "indentMore", "Shift-Tab": "indentLess"},
        styleActiveLine: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });

    // Set initial editor size
    codeEditor.setSize("100%", "100%");

    // Set default code for Python
    const defaultPythonCode = `# Welcome to QuantumIDE
# This is a Python example

print("Hello World")
`;

    // Default code for C++
    const defaultCppCode = `// Welcome to QuantumIDE
// This is a C++ example

#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}`;

    // Default code for Java
    const defaultJavaCode = `// Welcome to QuantumIDE
// This is a Java example

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`;

    // Set initial code
    codeEditor.setValue(defaultPythonCode);

    // Template code examples
    const templates = {
        python: {
            'hello-world': `print("Hello, World!")`,
            'data-structures': `# Python Data Structures Example

# Lists
my_list = [1, 2, 3, 4, 5]
print("List:", my_list)
print("List element:", my_list[0])
my_list.append(6)
print("After append:", my_list)

# Dictionaries
my_dict = {"name": "Alice", "age": 25, "city": "Wonderland"}
print("\\nDictionary:", my_dict)
print("Access by key:", my_dict["name"])
my_dict["email"] = "alice@example.com"
print("After adding key:", my_dict)

# Sets
my_set = {1, 2, 3, 3, 4, 5, 5}
print("\\nSet (removes duplicates):", my_set)
my_set.add(6)
print("After adding element:", my_set)

# Tuples (immutable)
my_tuple = (1, 2, 3, 4, 5)
print("\\nTuple:", my_tuple)
print("Tuple element:", my_tuple[0])`,
            'algorithms': `# Python Algorithms Example

def binary_search(arr, target):
    """Binary search implementation"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Sorting algorithm (Quick Sort)
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Test the algorithms
test_array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
search_target = 11

print(f"Array: {test_array}")
print(f"Searching for {search_target}")
result = binary_search(test_array, search_target)
print(f"Found at index: {result}")

unsorted = [9, 3, 7, 1, 5, 13, 19, 11, 17, 15]
print(f"\\nUnsorted array: {unsorted}")
sorted_array = quick_sort(unsorted)
print(f"Sorted array: {sorted_array}")`
        },
        cpp: {
            'hello-world': `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
            'data-structures': `#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <tuple>

int main() {
    // Vectors (dynamic arrays)
    std::vector<int> myVector = {1, 2, 3, 4, 5};
    std::cout << "Vector: ";
    for (int num : myVector) {
        std::cout << num << " ";
    }
    std::cout << "\\nVector element: " << myVector[0] << std::endl;
    myVector.push_back(6);
    std::cout << "After push_back: ";
    for (int num : myVector) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Maps (associative arrays)
    std::map<std::string, std::string> myMap;
    myMap["name"] = "Alice";
    myMap["age"] = "25";
    myMap["city"] = "Wonderland";
    
    std::cout << "\\nMap entries:" << std::endl;
    for (const auto& pair : myMap) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }
    
    // Sets
    std::set<int> mySet = {1, 2, 3, 3, 4, 5, 5};
    std::cout << "\\nSet (removes duplicates): ";
    for (int num : mySet) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Tuples
    std::tuple<int, std::string, double> myTuple(1, "Hello", 3.14);
    std::cout << "\\nTuple elements: " 
              << std::get<0>(myTuple) << ", " 
              << std::get<1>(myTuple) << ", " 
              << std::get<2>(myTuple) << std::endl;
    
    return 0;
}`,
            'algorithms': `#include <iostream>
#include <vector>
#include <algorithm>

// Binary search implementation
int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Quick sort implementation (using std::partition)
void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                std::swap(arr[i], arr[j]);
            }
        }
        std::swap(arr[i + 1], arr[high]);
        
        int pivotIndex = i + 1;
        
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

int main() {
    // Test binary search
    std::vector<int> testArray = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    int searchTarget = 11;
    
    std::cout << "Array: ";
    for (int num : testArray) {
        std::cout << num << " ";
    }
    std::cout << "\\nSearching for " << searchTarget << std::endl;
    
    int result = binarySearch(testArray, searchTarget);
    std::cout << "Found at index: " << result << std::endl;
    
    // Test quick sort
    std::vector<int> unsorted = {9, 3, 7, 1, 5, 13, 19, 11, 17, 15};
    std::cout << "\\nUnsorted array: ";
    for (int num : unsorted) {
        std::cout << num << " ";
    }
    
    quickSort(unsorted, 0, unsorted.size() - 1);
    
    std::cout << "\\nSorted array: ";
    for (int num : unsorted) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}`
        },
        java: {
            'hello-world': `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
            'data-structures': `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ArrayList (dynamic array)
        ArrayList<Integer> myList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        System.out.println("List: " + myList);
        System.out.println("List element: " + myList.get(0));
        myList.add(6);
        System.out.println("After adding: " + myList);
        
        // HashMap (associative array)
        HashMap<String, String> myMap = new HashMap<>();
        myMap.put("name", "Alice");
        myMap.put("age", "25");
        myMap.put("city", "Wonderland");
        
        System.out.println("\\nMap entries:");
        for (Map.Entry<String, String> entry : myMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // HashSet (removes duplicates)
        HashSet<Integer> mySet = new HashSet<>(Arrays.asList(1, 2, 3, 3, 4, 5, 5));
        System.out.println("\\nSet (removes duplicates): " + mySet);
        mySet.add(6);
        System.out.println("After adding element: " + mySet);
        
        // Arrays
        int[] myArray = {1, 2, 3, 4, 5};
        System.out.println("\\nArray: " + Arrays.toString(myArray));
    }
}`,
            'algorithms': `import java.util.Arrays;

public class Main {
    // Binary search implementation
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
    
    // Quick sort implementation
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }
    
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Swap arr[i+1] and arr[high] (pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1;
    }
    
    public static void main(String[] args) {
        // Test binary search
        int[] testArray = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int searchTarget = 11;
        
        System.out.println("Array: " + Arrays.toString(testArray));
        System.out.println("Searching for " + searchTarget);
        
        int result = binarySearch(testArray, searchTarget);
        System.out.println("Found at index: " + result);
        
        // Test quick sort
        int[] unsorted = {9, 3, 7, 1, 5, 13, 19, 11, 17, 15};
        System.out.println("\\nUnsorted array: " + Arrays.toString(unsorted));
        
        quickSort(unsorted, 0, unsorted.length - 1);
        
        System.out.println("Sorted array: " + Arrays.toString(unsorted));
    }
}`
        }
    };

    // Current language
    let currentLanguage = 'python';
    
    // Update editor mode based on language
    function updateEditorMode(language) {
        if (language === 'python') {
            codeEditor.setOption('mode', 'python');
            document.querySelector('.file-tab.active').textContent = 'main.py';
        } else if (language === 'cpp') {
            codeEditor.setOption('mode', 'text/x-c++src');
            document.querySelector('.file-tab.active').textContent = 'main.cpp';
        } else if (language === 'java') {
            codeEditor.setOption('mode', 'text/x-java');
            document.querySelector('.file-tab.active').textContent = 'Main.java';
        }
    }

    // Language selector buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get language from data attribute
            const language = this.getAttribute('data-language');
            currentLanguage = language;
            
            // Update editor mode
            updateEditorMode(language);
            
            // Set default code for the selected language
            if (language === 'python') {
                codeEditor.setValue(defaultPythonCode);
            } else if (language === 'cpp') {
                codeEditor.setValue(defaultCppCode);
            } else if (language === 'java') {
                codeEditor.setValue(defaultJavaCode);
            }
        });
    });

    // Template buttons
    const templateButtons = document.querySelectorAll('.template-btn');
    templateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const template = this.getAttribute('data-template');
            if (templates[currentLanguage] && templates[currentLanguage][template]) {
                codeEditor.setValue(templates[currentLanguage][template]);
            }
        });
    });

    // Run button
    const runButton = document.getElementById('run-btn');
    const outputArea = document.getElementById('output-area');
    
    runButton.addEventListener('click', function() {
        // Show loading state
        outputArea.textContent = 'Running code...';
        runButton.disabled = true;
        runButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running';
        
        // Get the code from the editor
        const code = codeEditor.getValue();
        
        // Send the code to the server for execution
        fetch('/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: code,
                language: currentLanguage
            }),
        })
        .then(response => response.json())
        .then(data => {
            // Display the output
            let output = '';
            
            if (data.output) {
                output += data.output;
            }
            
            if (data.error) {
                output += '\n\nError:\n' + data.error;
            }
            
            outputArea.textContent = output || 'Code executed successfully with no output.';
        })
        .catch(error => {
            outputArea.textContent = 'Error executing code: ' + error.message;
        })
        .finally(() => {
            // Reset button state
            runButton.disabled = false;
            runButton.innerHTML = '<i class="fas fa-play"></i> Run';
        });
    });

    // Clear output button
    const clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', function() {
        outputArea.textContent = 'Output cleared.';
    });

    // Theme toggle removed - Dark theme only
    // Always use the dark theme for CodeMirror
    codeEditor.setOption('theme', 'dracula');

    // Settings modal
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeModal = document.querySelector('.close-modal');
    const saveSettings = document.getElementById('save-settings');
    
    settingsBtn.addEventListener('click', function() {
        settingsModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function() {
        settingsModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });
    
    // Font size slider
    const fontSizeSlider = document.getElementById('font-size');
    const fontSizeValue = document.querySelector('.setting-value');
    
    fontSizeSlider.addEventListener('input', function() {
        const size = this.value;
        fontSizeValue.textContent = size + 'px';
        document.querySelector('.CodeMirror').style.fontSize = size + 'px';
    });
    
    // Theme select
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', function() {
        codeEditor.setOption('theme', this.value);
    });
    
    // Save settings
    saveSettings.addEventListener('click', function() {
        // Here you would typically save settings to localStorage
        // For now, just close the modal
        settingsModal.style.display = 'none';
    });

    // Fullscreen button
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    fullscreenBtn.addEventListener('click', function() {
        const editorContainer = document.querySelector('.editor-container');
        
        if (!document.fullscreenElement) {
            if (editorContainer.requestFullscreen) {
                editorContainer.requestFullscreen();
            } else if (editorContainer.mozRequestFullScreen) {
                editorContainer.mozRequestFullScreen();
            } else if (editorContainer.webkitRequestFullscreen) {
                editorContainer.webkitRequestFullscreen();
            } else if (editorContainer.msRequestFullscreen) {
                editorContainer.msRequestFullscreen();
            }
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });

    // Update line and column info
    codeEditor.on('cursorActivity', function() {
        const cursor = codeEditor.getCursor();
        document.querySelector('.line-info').textContent = `Line: ${cursor.line + 1}, Col: ${cursor.ch + 1}`;
    });

    // Add futuristic typing effect to the welcome message
    function typeEffect(element, text, speed) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Apply typing effect to the output area
    typeEffect(outputArea, 'Welcome to QuantumIDE! Press Run to execute your code.', 50);
});
