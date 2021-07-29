pipeline{ 
    agent any

    stages{ 
        stage('Build'){ 
        steps{ 
            
            sh '''
                ssh -T ubuntu@54.219.134.239 bash -c "'
                git https://github.com/SnePatel/node-app_hello-world.git
                
                '"
                '''
            
       }
      } 
          
       stage('Test') {
            steps {
                sh '''
                    ssh -T ubuntu@54.219.134.239 bash -c "'
                    pwd 
                    cd node-app_hello-world 
                    npm i 
                    pwd
                    '"
                '''
            }
        }
        stage('Deploy'){ 
            steps {
                sh '''
                    ssh -T ubuntu@54.219.134.239 bash -c "'
                    cd node-app_hello-world 
                    pm2 start ecosystem.config.js
                   
                   
                    '"
                '''
            }
        }
    }
}
