
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'users')
BEGIN
  CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL,
    birthdate DATETIME NOT NULL
  );
END;

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'routes')
BEGIN
  CREATE TABLE routes (
    num NUMERIC PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL,
    min_len NUMERIC NOT NULL,
    max_len NUMERIC NOT NULL
  );

  INSERT INTO routes (num, name, area, min_len, max_len)
  VALUES 
    (1, N'דן', 'GALIL', 6, 8),
    (2, N'כפר גלעדי', 'GALIL', 10, 12),
    (3, N'רמות נפתלי', 'GALIL', 12, 12),
    (4, N'ברעם', 'GALIL', 10, 12),
    (5, N'נחל עמוד', 'GALIL', 10, 10),
    (6, N'עין נון', 'GALIL', 12, 12),
    (7, N'כנרת', 'GALIL', 12, 12),
    (8, N'כפר קיש', 'GALIL', 12, 12),
    (9, N'הר יונה', 'GALIL', 8, 8),
    (10, N'אלון הגליל', 'GALIL', 12, 12),
    (11, N'קיבוץ יגור', 'HOFCARMEL', 12, 12),
    (12, N'עין הוד', 'HOFCARMEL', 12, 12),
    (13, N'רמת הנדיב', 'HOFCARMEL', 12, 12),
    (14, N'חדרה', 'HOFCARMEL', 10, 10),
    (15, N'חוף פולג', 'CENTER', 10, 10),
    (16, N'תל אביב', 'CENTER', 12, 12),
    (17, N'כפר סירקין', 'CENTER', 12, 12),
    (18, N'גמזו', 'JERUSALEM', 12, 12),
    (19, N'מסילת ציון', 'JERUSALEM', 10, 10),
    (20, N'קיבוץ צובה', 'JERUSALEM', 12, 12),
    (21, N'צור הדסה', 'JERUSALEM', 10, 10),
    (22, N'נתיב הל"ה', 'JERUSALEM', 12, 12),
    (23, N'בית גוברין', 'JERUSALEM', 10, 10),
    (24, N'תל קשת', 'TZFONNEG', 12, 12),
    (25, N'דבירה', 'TZFONNEG', 10, 10),
    (26, N'מיתר', 'TZFONNEG', 10, 10),
    (27, N'הר עמשא', 'NEGEV', 10, 10),
    (28, N'ערד', 'NEGEV', 10, 10),
    (29, N'באר אפעה', 'NEGEV', 8, 8),
    (30, N'מצד תמר', 'NEGEV', 10, 10),
    (31, N'המכתש הקטן', 'NEGEV', 12, 12),
    (32, N'מפעל אורון', 'NEGEV', 12, 12),
    (33, N'חניון מדור', 'NEGEV', 6, 6),
    (34, N'חוד עקב', 'NEGEV', 10, 10),
    (35, N'נחל חווה', 'NEGEV', 12, 12),
    (36, N'מצפה רמון', 'NEGEV', 10, 10),
    (37, N'הר סהרונים', 'NEGEV', 10, 10),
    (38, N'גב חולית', 'ARAVA', 12, 12),
    (39, N'צופר', 'ARAVA', 12, 12),
    (40, N'נחל ברק', 'ARAVA', 12, 12),
    (41, N'ציחור', 'ARAVA', 12, 12),
    (42, N'שיזפון', 'ARAVA', 10, 10),
    (43, N'שחרות', 'ARAVA', 12, 12),
    (44, N'חניון מנגן', 'ARAVA', 8, 10),
    (45, N'נחל רחם', 'EILAT', 12, 12),
    (46, N'הר יוהרם', 'EILAT', 8, 8);

END