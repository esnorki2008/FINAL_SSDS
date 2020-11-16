# FINAL_SSDS
### Crear Imagenes Para Los Contenedores
#### Imagen De React
    docker image build -t reactp .
    docker run -it  -p 80:80  --name React  -d reactp
#### Imagen De Python
    docker image build -t python .
    docker run -it  -p 80:80  --name Python  -d python
#### Agregar Una Etiqueta A Las Imagenes
    docker tag 7c79e62d5433  esnorki2008/reactt
    docker tag de7e1d641040  esnorki2008/pythont
### Ingresar Sesion De Docker Hub
    docker login
### Subir Imagenes A Docker Hub
    docker push esnorki2008/reactt
    docker push esnorki2008/pythont
### Crear Pods De Kubernetes
#### React
    kubectl create deployment web --image=esnorki2008/reactt
    kubectl scale deployment web --replicas=3
#### Python
    kubectl create deployment api --image=esnorki2008/pythont
    kubectl scale deployment api --replicas=3
