# Revhere
#### แพลตฟอร์มสำหรับ Review ทุกอย่างที่คุณต้องการ

Frontend production: https://revhere.com/

Api production: http://178.128.86.161/graphql

# Development
##### ขั้นตอนการเปิด server dev
- cd ไปที่ root path

- run คำสั่ง `yarn dev` **(ที่ root path)**

- จะ run ทั้ง frontend และ backend ขึ้นมาพร้อมกัน

> ** backend ต้องสร้าง database รอไว้ด้วยเพื่อทำการ connect วิธีสร้างสามารถทำตามขั้นตอนด้านล่างได้เลย

##### กรณีต้องการ run แยกกัน (ไม่แนะนำเสียเวลา)
##### ขั้นตอนการเปิด server ฝั่ง frontend
- `yarn workspaces frontend dev`

##### ขั้นตอนการเปิด server ฝั่ง backend
- เปิด database postgres หากยังไม่ติดตั้ง สามารถโหลดได้จากเว็บนี้ https://postgresapp.com/downloads.html

- สร้าง Database  โดย run command ด้านล่างนี้ จะทำการสร้าง Database ชื่อ `revhere_development` username: `postgres` password: `password`

- `Database sudo -u postgres psql`

- `postgres=# create database revhere_development;`

- `postgres=# create user postgres with encrypted password 'password';`

- `postgres=# grant all privileges on database revhere_development to postgres;`
 
- run คำสั่งเพื่อเปิด server api development `yarn worksapces backend dev`

# Deployment
เมื่อ push code ไปที่ branch master ระบบจะ detect ไฟล์ที่เปลี่ยนแปลงและทำการ Deploy ให้อัติโนมัติ

