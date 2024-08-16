Fullstack Application Deployment with Kubernetes
This repository hosts a fullstack application featuring a frontend, backend, and MongoDB database, all managed through Kubernetes. The architecture includes a Node.js API server (backend), an Nginx server delivering static content (frontend), and a MongoDB database.

Getting Started
Requirements
Docker
Kubernetes (Minikube or any Kubernetes cluster)
kubectl
Build and Push Docker Images
Before deploying to Kubernetes, build and push the Docker images for the backend and frontend:

bash
Copy code
# Backend
cd Backend
docker build -t <Your-docker-Hub-account>/node-backend .
docker push <Your-docker-Hub-account>/node-backend

# Frontend
cd Frontend
docker build -t <Your-docker-Hub-account>/nginx-frontend .
docker push <Your-docker-Hub-account>/nginx-frontend
Deploy to Kubernetes
bash
Copy code
## Create the namespace
kubectl create namespace fullstack-app

## Deploy ConfigMap
kubectl apply -f K8s/configMap.yaml -n fullstack-app

## Deploy Persistent Volume and Persistent Volume Claim
kubectl apply -f K8s/pv.yaml -n fullstack-app

## Deploy Secret
kubectl apply -f K8s/secret.yaml -n fullstack-app

## Deploy MongoDB
kubectl apply -f K8s/Mongodb/ -n fullstack-app

## Deploy Node.js backend
kubectl apply -f K8s/Nodejs/ -n fullstack-app

## Deploy Nginx frontend
kubectl apply -f K8s/Nginx/ -n fullstack-app
Verify Deployments
Check the status of all pods:

bash
Copy code
kubectl get pods -n fullstack-app
Access the Frontend Application
Retrieve the services and Minikube IP:

bash
Copy code
kubectl get svc -n fullstack-app
minikube ip
Visit the application using the NodePort exposed by the Nginx service: http://<minikubeip>:<node-port-nginx>

