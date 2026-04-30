### Install kubectl:

```
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"

chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```

### Install minikube:

```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

chmod +x minikube-linux-amd64
sudo mv minikube-linux-amd64 /usr/local/bin/minikube
```

### Install OLM:

```
LATEST=$(curl -s https://api.github.com/repos/operator-framework/operator-lifecycle-manager/releases/latest | grep tag_name | cut -d '"' -f 4)
echo $LATEST
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/${LATEST}/install.sh | bash -s ${LATEST}
kubectl get pods -n olm
```
