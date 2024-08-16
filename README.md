Full-Stack Application Deployment on Kubernetes
Setup the Kubernetes Environment


Start Minikube with resources by running:
minikube start --cpus=4 --memory=2200 --disk-size=10g
This command starts Minikube with allocated CPU, memory, and disk space.

Verify kubectl configuration with:
kubectl config use-context minikube and kubectl cluster-info
These commands check the Kubernetes cluster context and status.

Create a Namespace for the project using:
kubectl create namespace fullstack-app
This command creates a separate namespace for organizing resources.

Containerize the Application
Frontend (Nginx)
Build the Docker image:
docker build -t parinaya12/my-frontend:latest .
This command builds the Docker image for the Nginx server.

Push the Docker image:
docker push parinaya12/my-frontend:latest
This command pushes the Docker image to Docker Hub.

Backend (Node.js)
Build the Docker image:
docker build -t parinaya12/my-backend:latest .
This command builds the Docker image for the Node.js server.

Push the Docker image:
docker push parinaya12/my-backend:latest
This command pushes the Docker image to Docker Hub.

Database (MongoDB)
Create Persistent Volume with:
kubectl apply -f k8s/pv.yaml
This command creates a Persistent Volume for MongoDB.

Create Persistent Volume Claim with:
kubectl apply -f k8s/pvc.yaml
This command creates a Persistent Volume Claim for MongoDB.

Deploy Kubernetes Resources
Deploy MongoDB by applying:
kubectl apply -f k8s/mongo-deployment.yaml and kubectl apply -f k8s/mongo-service.yaml
These commands deploy MongoDB and its service.

Deploy the Node.js Application with:
kubectl apply -f k8s/nodejs-deployment.yaml and kubectl apply -f k8s/nodejs-service.yaml
These commands deploy the Node.js backend and its service.

Deploy Nginx using:
kubectl apply -f k8s/nginx-deployment.yaml and kubectl apply -f k8s/nginx-service.yaml
These commands deploy Nginx and its service.

Verify and Access
Check Pod Status with:
kubectl get pods -n fullstack-app
This command lists all pods and their statuses.

Check Services and External IP with:
kubectl get services -n fullstack-app
This command lists services and their external IPs.

Access the Nginx Service on Minikube with:
minikube service nginx-service -n fullstack-app
This command opens the Nginx service in your default browser.

Port-forward the Node.js Service using:
kubectl port-forward service/nodejs-service 3000:3000 -n fullstack-app
This command forwards port 3000 to access the Node.js service locally.

Debugging
View Logs for MongoDB with:
kubectl logs mongo-deployment-6fdb84fb66-7qgzb  -n fullstack-app
This command views logs for the MongoDB pod.

Describe Resources for debugging with:
kubectl describe pod  -n fullstack-app
This command describes the specified pod for detailed information.
