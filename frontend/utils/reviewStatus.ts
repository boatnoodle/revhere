//ใช้เช็ค status ที่คืนมาจาก backend (ขา api ส่งกลับมา)
export const REVIEW_STATUS_ENUM = {
  draft: 'draft',
  publish: 'publish',
  remove: 'remove',
};

//ใช้กรณีต้องการส่ง status ให้หลังบ้าน (ขา ยิงไป)
export const REVIEW_STATUS = {
  draft: 'DRAFT',
  publish: 'PUBLISH',
  remove: 'REMOVE',
};

//ใช้แสดงผลฝั่ง frontend
export const REVIEW_STATUS_TEXT = {
  draft: 'แบบร่าง',
  publish: 'เผยเพร่แล้ว',
  remove: 'ถูกลบแล้ว',
};
