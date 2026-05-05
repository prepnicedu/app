### Install OLM:
```
LATEST=$(curl -s https://api.github.com/repos/operator-framework/operator-lifecycle-manager/releases/latest | grep tag_name | cut -d '"' -f 4)
echo $LATEST
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/${LATEST}/install.sh | bash -s ${LATEST}
kubectl get pods -n olm
```

kubectl delete secret keycloak-db-secret -n keycloak

kubectl create secret generic keycloak-db-secret \
  --from-literal=username=testuser \
  --from-literal=password=testpassword \
  -n keycloak

kubectl get svc -n envoy-gateway-system
kubectl port-forward svc/envoy-default-eg-e41e7b31 -n envoy-gateway-system 8888:80

kubectl get secret example-kc-initial-admin -n keycloak -o jsonpath='{.data.password}' | base64 --decode