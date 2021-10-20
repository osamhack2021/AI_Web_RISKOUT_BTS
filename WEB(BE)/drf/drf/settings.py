import os
import json
from django.core.exceptions import ImproperlyConfigured


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_FILE = os.path.join(BASE_DIR, 'secrets.json')
SECRETS = None


with open(SECRET_FILE) as f:
    SECRETS = json.loads(f.read())


def getSecretVariable(key):
    try:
        return SECRETS[key]
    except KeyError:
        error_msg = f"{key} import error!"
        raise ImproperlyConfigured(error_msg)


SECRET_KEY = getSecretVariable("SECRET_KEY")
DEBUG = True if getSecretVariable("DEBUG") == "True" else False
ALLOWED_HOSTS = getSecretVariable("ALLOWED_HOSTS")


INSTALLED_APPS = [
    # django default apps
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # 3rd party apps
    'rest_framework',
    'knox',
    'django_rest_passwordreset',

    # my apps
    'accounts',
    'detection_status'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'drf.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "build")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'drf.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Seoul'
USE_I18N = True
USE_L10N = True
USE_TZ = False

STATIC_URL = '/static/'
STATICFILES_DIRS = [
  os.path.join(BASE_DIR, "build/static"),
]
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'knox.auth.TokenAuthentication',
    ]
}

EMAIL_BACKEND = getSecretVariable("EMAIL_BACKEND")
EMAIL_HOST = getSecretVariable("EMAIL_HOST")
EMAIL_USE_TLS = True if getSecretVariable("EMAIL_USE_TLS") == "True" else False
EMAIL_PORT = getSecretVariable("EMAIL_PORT")
EMAIL_HOST_USER = getSecretVariable("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = getSecretVariable("EMAIL_HOST_PASSWORD")
