Multi-Service DevOps Pipeline (Node + Python + Kubernetes + CI/CD)

A full microservices DevOps project featuring two APIs (Node.js + Python), fully containerized with Docker, analyzed with SonarCloud, pushed to AWS ECR, and deployed to Kubernetes with GitHub Actions automation.

Includes:

CI 🧪 build + test + code quality analysis (SonarCloud) + security scan

CD 🚀 push Docker images to ECR

Kubernetes ☸ deployments + services + ingress

multi-cicd-project/
│
├─ services/
│  ├─ api-node/   # Node.js microservice
│  └─ api-py/     # Python Flask microservice
│
├─ .github/workflows/   # GitHub Actions CI/CD pipeline
├─ k8s-manifests/       # Kubernetes Manifests (Deployments, Services, Ingress)
└─ README.md

| Category           | Tools                             |
| ------------------ | --------------------------------- |
| Backend            | Node.js (Express), Python (Flask) |
| Containerization   | Docker                            |
| Container Registry | AWS ECR                           |
| CI/CD              | GitHub Actions                    |
| Code Quality       | **SonarCloud (SonarQube)**        |
| Security           | Trivy                             |
| Orchestration      | Kubernetes (Kind)                 |
| Networking         | NGINX Ingress                     |

🔍 Code Quality & Security

SonarCloud (SonarQube)

Static code analysis for Node.js & Python services

Detects bugs, code smells, and security vulnerabilities

Quality Gate evaluation on CI runs

CI-based analysis via GitHub Actions (automatic analysis disabled)

Trivy

File system security scanning

Reports HIGH & CRITICAL vulnerabilities

🧪 How to Run Locally
1️⃣ Clone the repo
git clone https://github.com/fazil2905/multi-cicd-project.git
cd multi-cicd-project

2️⃣ Create Kind cluster
kind create cluster --name dev-cluster

3️⃣ Deploy Kubernetes manifests
kubectl apply -f k8s-manifests/

4️⃣ Port-forward Ingress
kubectl port-forward \
  --namespace ingress-nginx \
  service/ingress-nginx-controller 80:80 443:443

5️⃣ Open in Browser

🔹 Node API → http://localhost/node

🔹 Python API → http://localhost/py

🧭 Future Improvements

Add unit tests for Node & Python services

Enforce SonarCloud Quality Gate failure in CI

Add Prometheus + Grafana monitoring

👨‍💻 Author

Fazil Ahmed
