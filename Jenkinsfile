pipeline{ 
    agent any

    stages{ 
        stage('Build'){ 
        steps{
            sh 'pm2 delete ecosystem.config.js'
            git 'https://github.com/SnePatel/node-app_hello-world.git'
            sh 'scp /var/lib/jenkins/workspace/NodeAppEC2/* ubuntu@54.177.199.243:/home/ubuntu/node-app_hello-world'
            /**sh '''
                ssh -T ubuntu@54.219.134.239 bash -c "'
                git clone https://github.com/SnePatel/node-app_hello-world.git
                
                '"
                '''**/
            
       }
      } 
          
       stage('Test') {
            steps {
                sh '''
                    ssh -T ubuntu@54.177.199.243 bash -c "'
                    pwd 
                    cd node-app_hello-world 
                    npm i
                    npm build
                    pwd
                    '"
                '''
            }
        }
        stage('Deploy'){ 
            steps {
                sh '''
                    ssh -T ubuntu@54.177.199.243 bash -c "'
                    cd node-app_hello-world 
                    pm2 start ecosystem.config.js
                    
                    '"
                '''
            }
        }
    }
}
