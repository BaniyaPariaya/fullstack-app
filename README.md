Full-Stack Application Deployment on Kubernetes
Setup the Kubernetes Environment
1. Start Minikube
Allocate resources and start Minikube with:

minikube start --cpus=4 --memory=2200 --disk-size=10g

This command initializes Minikube with the specified CPU, memory, and disk space.

2. Verify kubectl Configuration
Ensure kubectl is configured to use Minikube by running:

kubectl config use-context minikube and kubectl cluster-info

These commands check the Kubernetes cluster context and display cluster information.

3. Create a Namespace

Organize resources by creating a namespace:

kubectl create namespace fullstack-app

Containerize the Application
Frontend (Nginx)
Build the Docker Image:

docker build -t parinaya12/my-frontend:latest .

This command builds the Docker image for the Nginx server.

Push the Docker Image:

docker push parinaya12/my-frontend:latest

This command uploads the Docker image to Docker Hub.

Backend (Node.js)
Build the Docker Image:

docker build -t parinaya12/my-backend:latest .

This command builds the Docker image for the Node.js server.

Push the Docker Image:

docker push parinaya12/my-backend:latest

This command uploads the Docker image to Docker Hub.

Database (MongoDB)
Create Persistent Volume:

kubectl apply -f k8s/pv.yaml

This command sets up a Persistent Volume for MongoDB.

Create Persistent Volume Claim:

kubectl apply -f k8s/pvc.yaml

This command sets up a Persistent Volume Claim for MongoDB.

Deploy Kubernetes Resources
1. Deploy MongoDB

Apply MongoDB deployment and service configurations with:

kubectl apply -f k8s/mongo-deployment.yaml and kubectl apply -f k8s/mongo-service.yaml

2. Deploy Node.js Application

Apply Node.js deployment and service configurations with:

kubectl apply -f k8s/nodejs-deployment.yaml and kubectl apply -f k8s/nodejs-service.yaml

3. Deploy Nginx

Apply Nginx deployment and service configurations with:

kubectl apply -f k8s/nginx-deployment.yaml and kubectl apply -f k8s/nginx-service.yaml

Verify and Access
1. Check Pod Status
List all pods and their statuses with:

kubectl get pods -n fullstack-app

2. Check Services and External IP

List services and their external IPs with:

kubectl get services -n fullstack-app

3. Access Nginx Service
Open the Nginx service in your default browser (Minikube) with:

minikube service nginx-service -n fullstack-app

4. Port-Forward Node.js Service
Forward port 3000 to access the Node.js service locally with:

kubectl port-forward service/nodejs-service 3000:3000 -n fullstack-app

Debugging
1. View Logs for MongoDB
View logs for the MongoDB pod with:

kubectl logs mongo-deployment-6fdb84fb66-7qgzb -n fullstack-app

2
