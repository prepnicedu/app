### Install OLM:
```
LATEST=$(curl -s https://api.github.com/repos/operator-framework/operator-lifecycle-manager/releases/latest | grep tag_name | cut -d '"' -f 4)
echo $LATEST
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/${LATEST}/install.sh | bash -s ${LATEST}
kubectl get pods -n olm
```