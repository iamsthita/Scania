# Import necessary modules from Flask
from flask import Flask, request, render_template

# Create a Flask application instance
app = Flask(__name__)

# Define a route for the homepage
@app.route('/')
def index():
    # Render the index.html template
    return render_template('index.html')

# Run the Flask application if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
