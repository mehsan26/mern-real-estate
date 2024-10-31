pipeline {
    agent any
    stages {
        stage('Build api') {
            steps {
                dir('api') {
                    script {
                        docker.build('mern-api', '.')
                    }
                }
            }
        }
        stage('Build client') {
            steps {
                dir('client') {
                    script {
                        docker.build('mern-client', '.')
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

