from config import Config
from app import create_app

app = create_app(Config)

# will run only if this module is the 'main' module.
if __name__ == "__main__":
    app.run(debug=True)
