from flask import Flask
from flask_mail import Mail

app = Flask(__name__)
app.config.update(
    MAIL_SERVER='smtp@gmail.com',
    MAIL_PORT=587,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = 'firewallupdater@gmail.com',
    MAIL_PASSWORD = 'umyiuiyapiypoyoo'
)

mail = Mail(app)

@app.route('/send-mail/')
def send_mail():
    msg = mail.send_message(
        'Send Mail tutorial!',
        sender='firewallupdater@gmail.com',
        recipients=['mazzotti.vlm@gmail.com'],
        body="Congratulations you've succeeded!"
    )
    return 'Mail sent'

app.run()