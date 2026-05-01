### Install kind:

```
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
kind create cluster
```

### Install apisix:

```
kubectl create namespace apisix
helm repo add apisix https://apache.github.io/apisix-helm-chart
helm repo update

helm install apisix apisix/apisix \
  --create-namespace \
  --namespace apisix \
  --set dashboard.enabled=true \
  --set ingress-controller.enabled=true \
  --set ingress-controller.config.apisix.serviceNamespace=apisix

kubectl get pods -n apisix

kubectl port-forward svc/apisix-admin -n apisix 9180:9180

edd1c9f034335f136f87ad84b625c8f1
```

### Install OLM:

```
LATEST=$(curl -s https://api.github.com/repos/operator-framework/operator-lifecycle-manager/releases/latest | grep tag_name | cut -d '"' -f 4)
echo $LATEST
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/${LATEST}/install.sh | bash -s ${LATEST}
kubectl get pods -n olm
```

kubectl create secret generic keycloak-db-secret \
  --from-literal=username=testuser \
  --from-literal=password=testpassword \
  -n keycloak
