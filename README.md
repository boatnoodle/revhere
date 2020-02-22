# Revhere
#### แพลตฟอร์มสำหรับ Review ทุกอย่างที่คุณต้องการ

Frontend production: https://revhere.com/

Api production: http://178.128.86.161/graphql

# สร้าง Env (frontend)
- สร้าง `.env` ไฟล์ที่ `cd ./frontend`

- เพิ่ม `GRAPHQL_URL=http://localhost:4000/graphql` ลงใน `.env`

# Setup postgres database
- เปิด database postgres หากยังไม่ติดตั้ง สามารถโหลดได้จากเว็บนี้ https://postgresapp.com/downloads.html

- สร้าง Database  โดย run command ด้านล่างนี้ จะทำการสร้าง Database ชื่อ `revhere_development` username: `postgres` password: `password` **(ให้สร้างตามนี้เพราะใน config ใช้ database ,username ,password นี้ ถ้าไม่สร้างตาม จะต้องเปลี่ยนไฟล์ config เองอีกที)** 

- `Database sudo -u postgres psql`

- `postgres=# create database revhere_development;`

- `postgres=# create user postgres with encrypted password 'password';`

- `postgres=# grant all privileges on database revhere_development to postgres;`
 
# Prerequisite
- Setup .env ไฟล์ที่ frontend ให้เรียบร้อย

- ติดตั้ง postgres app และ สร้าง database พร้อม user

# Development
> ** root path คือ Folder project ไม่ต้องเข้าไปใน subfolder frontend หรือ backend

- Run คำสั่ง `yarn` เพื่อติดตั้ง package ทั้งหมด **(ที่ root path)** 

- Run คำสั่ง `yarn dev` **(ที่ root path)** 

- จะทำการ run script dev ทั้ง frontend และ backend ขึ้นมาพร้อมกัน

##### กรณีต้องการ run แยกกัน (สามารถทำได้แต่ไม่แนะนำเสียเวลา)
##### ขั้นตอนการเปิด server ฝั่ง frontend (สามารถทำได้แต่ไม่แนะนำเสียเวลา)
- `yarn workspaces frontend dev`

##### ขั้นตอนการเปิด server ฝั่ง backend (สามารถทำได้แต่ไม่แนะนำเสียเวลา)

- run คำสั่งเพื่อเปิด server api development `yarn worksapces backend dev`

# Deployment
เมื่อ push code ไปที่ branch master ระบบจะ detect ไฟล์ที่เปลี่ยนแปลงและทำการ Deploy ให้อัติโนมัติ
โดย frontend จะ deploy ขึ้น https://www.netlify.com/ ส่วน backend จะdeploy ขึ้น https://www.digitalocean.com/

