# Revhere
#### แพลตฟอร์มสำหรับ Review ทุกอย่างที่คุณต้องการ

Frontend production: https://revhere.com/

Api production: https://phukethomevilla.com/graphql

# Prerequisite
- ติดตั้ง postgres app และ สร้าง database พร้อม user

# Setup postgres database
- สร้าง Database ชื่อ `revhere_development` username: `postgres` password: `password` **(ให้สร้างตามนี้เพราะใน config ใช้ database ,username ,password นี้ ถ้าไม่สร้างตาม จะต้องเปลี่ยนไฟล์ config เองอีกที)** 

- เปิด `postgres app` หากยังไม่ติดตั้ง สามารถโหลดได้จากเว็บนี้ https://postgresapp.com/downloads.html

- เปิด terminal ของ `postgres app` ขึ้นมาและ run คำสั่งด้านล่างนี้

- `postgres=# create database revhere_development;`

- `postgres=# create user postgres with encrypted password 'password';`

- `postgres=# grant all privileges on database revhere_development to postgres;`

# Development
> ** root path คือ Folder project ไม่ต้องเข้าไปใน subfolder frontend หรือ backend

- Run คำสั่ง `yarn` เพื่อติดตั้ง package ทั้งหมด **(ที่ root path)** 

- Run คำสั่ง `yarn dev` **(ที่ root path)** 

- จะทำการ run script dev ทั้ง frontend และ backend ขึ้นมาพร้อมกัน

- Let's fun!

# Deployment
เมื่อ push code ไปที่ branch master ระบบจะ detect ไฟล์ที่เปลี่ยนแปลงและทำการ Deploy ให้อัติโนมัติ
โดย frontend จะ deploy ขึ้น https://www.netlify.com/ ส่วน backend จะdeploy ขึ้น https://www.digitalocean.com/

