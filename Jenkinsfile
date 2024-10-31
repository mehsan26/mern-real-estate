pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                dir('api') {
                    script {
                        docker.build('mern-backend', '.')
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('client') {
                    script {
                        docker.build('mern-frontend', '.')
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}

