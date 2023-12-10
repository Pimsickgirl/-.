document.addEventListener('DOMContentLoaded', function() {
    // กำหนด URL ของไฟล์ JSON
    var jsonUrl = 'data.json';

    // โหลดข้อมูล JSON และแสดงผลลัพธ์ในตาราง
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => displayJsonData(data))
        .catch(error => console.error('Error fetching JSON:', error));
});

function displayJsonData(data) {
    var table = document.getElementById('jsonTable');
    
    // สร้างหัวข้อตารางจาก properties ของ JSON
    var headers = Object.keys(data[0]);
    var headerRow = table.insertRow();
    headers.forEach(header => {
        var th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // เพิ่มข้อมูลลงในตาราง
    data.forEach(item => {
        var row = table.insertRow();
        headers.forEach(header => {
            var cell = row.insertCell();
            cell.textContent = item[header];
        });
    });
}
