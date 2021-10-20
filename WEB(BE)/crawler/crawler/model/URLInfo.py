class URLInfo:
    def __init__(self, domain, subject):
        self.domain = domain
        self.subject = subject

    def __str__(self):
        result = ""
        result += f"domain: {self.domain}\n"
        result += f"subject: {self.subject}\n"

        return result
