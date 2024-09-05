# FutApi

Este es el Proyecto Integrado FutApi del ciclo superior de Desarrollo De Aplicaciones (_"DAW"_) del [IES Gran Capitán](https://informatica.iesgrancapitan.org).

El objetivo principal del proyecto es elaborar una serie de predicciones aplicadas al fútbol.

Esta idea nace después de acudir a varias charlas de Miguel Ángel Arroyo (tutor de FCT de Javier Postigo Arévalo) en diferentes años de la Sysmana organizada por el instituto, donde utilizaba modelos de aprendizaje para realizar predicciones y proporcionar datos acerca de partidos y equipos de fútbol. Tomamos la referencia de estas charlas para aplicarla sobre jugadores de fútbol y así intentar predecir y/o evaluar el rendimiento de dichos jugadores en una temporada.

El nombre de FutApi proviene de Fútbol y [API](https://aws.amazon.com/es/what-is/api/#:~:text=en%20su%20tel%C3%A9fono.-,%C2%BFQu%C3%A9%20significa%20API%3F,de%20servicio%20entre%20dos%20aplicaciones.).
Este proyecto se puede dividir en 2 partes:

- El Backend, el cual alberga el proceso de entrenamiento de los diferentes modelos de aprendizaje además de la propia API que proporciona el servicio. Desarrollado en el lenguaje de programación Python sumado a varias librerías entre las que se encuentra Scikit-learn y el framework Flask.
- El Frontend, el cual alberga toda la Interfaz Gráfica de Usuario en formato Web para hacer el proyecto más accesible para todo el público que desee utilizar nuestra aplicación. Desarrollado con el framework Angular, utiliza HTML, CSS y el lenguaje de programación TypeScript.

## Instalación

Para la instalación y acceso desde [http://localhost/] seguiremos los siguentes pasos:

### Requisitos de la instalación

Instalación de Node versión: v20.11.0
Instalación de Angular versión: 17.0.0
Instalación de Python versión: v3.12
Instalación de NPM versión: v10.2.4
OS: win32 x64


Puertos necesarios:

- 4200: Para alojar la aplicación web

- 5000: Para el servicio de la api

### Instalación y despliegue

- En local si se quiere probar:

* Backend: Para el backend primero se tendrá que descargar las siguientes librerias con los siguientes comandos:

```bash
pip install flask flask-cors pandas scikit-learn numpy
```

Una vez instaladas esas librerias se tendrá que ubicar mediante consola ya sea de bash, cmd, powershell... en la ruta donde se aloja el programe.py (../backend/) y lanzar el siguiente comando para levantar el servicio de la API:

```bash
python programe.py
```

* Frontend: Para el frontend lo primero es ubicarse en el directorio raiz (donde se encuentren la carpeta de modulos, src, package.json...) e instalar los modulos de node necesarios.

```bash
npm i
```

Una vez instaladas solo quedaría levantar la web con el siguiente comando:

```bash
ng serve -o
```

## Documentación

La documentación del proyecto reside en nuestra [Wiki](https://github.com/victorfernandezesp/FutApi/wiki):

- [Inicio](https://github.com/victorfernandezesp/FutApi/wiki)
- [Documentación del Proyecto](https://github.com/victorfernandezesp/FutApi/wiki/FutApiDoc)
  - [Introducción](https://github.com/victorfernandezesp/FutApi/wiki/1_Introduccion)
  - [Objetivos y requisitos del proyecto](https://github.com/victorfernandezesp/FutApi/wiki/2_Objetivos_Y_Requisitos)
  - [Estudio previo](https://github.com/victorfernandezesp/FutApi/wiki/3_Estudio_Previo)
  - [Plan de trabajo](https://github.com/victorfernandezesp/FutApi/wiki/4_Plan_De_Trabajo)
  - [Diseño](https://github.com/victorfernandezesp/FutApi/wiki/5_Diseno)
  - [Implantación](https://github.com/victorfernandezesp/FutApi/wiki/6_Implantacion)
  - [Recursos](https://github.com/victorfernandezesp/FutApi/wiki/7_Recursos)
  - [Conclusiones](https://github.com/victorfernandezesp/FutApi/wiki/8_Conclusiones)
  - [Referencias / bibliografía](https://github.com/victorfernandezesp/FutApi/wiki/9_Referencias_Bibliografia)
  - [Anexo](https://github.com/victorfernandezesp/FutApi/wiki/10_Anexo)
- [Manual de Despliegue](https://github.com/victorfernandezesp/FutApi/wiki/Manual_Despliegue)
- [Manual de Usuario](https://github.com/victorfernandezesp/FutApi/wiki/Manual_Usuario)

## Autores

- [@Víctor Fernández España](https://github.com/victorfernandezesp)

- [@Javier Postigo Arévalo](https://github.com/JavierPA3)
