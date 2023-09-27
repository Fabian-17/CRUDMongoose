# Proyecto CRUD con Mongoose
Este es un proyecto simple que demuestra cómo crear, leer, actualizar y eliminar datos en una base de datos MongoDB utilizando Mongoose y Node.js.

Recomendamos el uso de `pnpm` como gestor de paquetes debido a sus ventajas en términos de velocidad y espacio de almacenamiento. Pero también puedes utilizar `npm` o `yarn` según tus preferencias.
Si aún no tienes `pnpm` instalado, puedes hacerlo de la siguiente manera:

### Instalar pnpm

1. Abre tu terminal o línea de comandos en modo administrador.

2. Ejecuta el siguiente comando para instalar `pnpm` de forma global:

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

## Requisitos previos
Asegúrate de tener instalados los siguientes requisitos previos antes de comenzar:

Node.js: Descargar e instalar Node.js
MongoDB: Descargar e instalar MongoDB

## Instalación
1. Clona este repositorio o descarga el código fuente:
```bash
git clone https://github.com/Fabian-17/CRUDMongoose.git
```

2. Navega hasta el directorio del proyecto:
```bash
cd crud-mongoose
```

3. Instala las dependencias del proyecto:
```bash
npm install
```

## Configuración
Asegúrate de configurar la conexión a tu base de datos MongoDB en el archivo `src/config/connection.js.` Puedes modificar la URL de conexión de MongoDB según sea necesario.

## Ejecución 
Para ejecutar la aplicación, simplemente ejecuta el siguiente comando:
```bash
npm run start
```

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
```bash
npm run dev
```