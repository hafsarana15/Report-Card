var name = prompt("Enter Student NAme") || "Student Name";
var rollNo = prompt("Enter Roll Number") || "101";
var studentClass = prompt("Enter Class / Grade") || "Class 10th";

var english = parseInt(prompt("Enter English Marks (out of 100)")) || 0;
var urdu = parseInt(prompt("Enter Urdu Marks (out of 100)")) || 0;
var math = parseInt(prompt("Enter Math Marks (out of 100)")) || 0;
var computer = parseInt(prompt("Enter Computer Marks (out of 100)")) || 0;
var physice = parseInt(prompt("Enter Physics Marks (out of 100)")) || 0;

var maxPerSubject = 100;
var total = 500;
var obtained_marks = english + urdu + math + computer + physice;
var percentage = ((obtained_marks / total) * 100).toFixed(2);

var grade, resultStatus;
if (percentage >= 90) {
    grade = "A+";
    resultStatus = "PASSED";
} else if (percentage >= 80) {
    grade = "A";
    resultStatus = "PASSED";
} else if (percentage >= 70) {
    grade = "B";
    resultStatus = "PASSED";
} else if (percentage >= 60) {
    grade = "C";
    resultStatus = "PASSED";
} else if (percentage >= 50) {
    grade = "D";
    resultStatus = "PASSED";
} else {
    grade = "F";
    resultStatus = "FAILED";
}

function getSubjectStatus(marks) {
    return marks >= 40 ? '<span class="status-pass">PASS</span>' : '<span class="status-fail">FAIL</span>';
}

var resultHTML = `
    <div class="report-card">
        <!-- School Header -->
        <div class="school-header">
            <h1>SMART TECH ACADEMY</h1>
            <p>Smart Tech Academy Report (Session 2025-2026)</p>
            <div class="report-title">Student Progress Report</div>
        </div>

        <!-- Student Information -->
        <div class="student-info-grid">
            <div class="info-item"><strong>Student Name:</strong> ${name}</div>
            <div class="info-item"><strong>Roll No:</strong> ${rollNo}</div>
            <div class="info-item"><strong>Class / Grade:</strong> ${studentClass}</div>
            <div class="info-item"><strong>Status:</strong> <span class="${resultStatus === 'PASSED' ? 'status-pass' : 'status-fail'}">${resultStatus}</span></div>
        </div>

        <!-- Marks Table -->
        <table class="marks-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Total Marks</th>
                    <th>Obtained Marks</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="subject-name">English</td>
                    <td>${maxPerSubject}</td>
                    <td>${english}</td>
                    <td>${getSubjectStatus(english)}</td>
                </tr>
                <tr>
                    <td class="subject-name">Urdu</td>
                    <td>${maxPerSubject}</td>
                    <td>${urdu}</td>
                    <td>${getSubjectStatus(urdu)}</td>
                </tr>
                <tr>
                    <td class="subject-name">Mathematics</td>
                    <td>${maxPerSubject}</td>
                    <td>${math}</td>
                    <td>${getSubjectStatus(math)}</td>
                </tr>
                <tr>
                    <td class="subject-name">Computer Science</td>
                    <td>${maxPerSubject}</td>
                    <td>${computer}</td>
                    <td>${getSubjectStatus(computer)}</td>
                </tr>
                <tr>
                    <td class="subject-name">Physics</td>
                    <td>${maxPerSubject}</td>
                    <td>${physice}</td>
                    <td>${getSubjectStatus(physice)}</td>
                </tr>
            </tbody>
        </table>

        <!-- Summary -->
        <div class="summary-container">
            <div class="summary-box">
                <h4>Maximum Marks</h4>
                <p>${total}</p>
            </div>
            <div class="summary-box">
                <h4>Obtained Marks</h4>
                <p>${obtained_marks}</p>
            </div>
            <div class="summary-box">
                <h4>Percentage</h4>
                <p>${percentage}%</p>
            </div>
            <div class="summary-box">
                <h4>Grade</h4>
                <p>${grade}</p>
            </div>
        </div>

        <!-- Signatures Section -->
        <div class="signatures">
            <div class="signature-box">
                <div class="signature-line"></div>
                <span>Class Teacher</span>
            </div>
            <div class="signature-box">
                <div class="signature-line"></div>
                <span>Exam Controller</span>
            </div>
            <div class="signature-box">
                <div class="signature-line"></div>
                <span>Principal Stamp & Sign</span>
            </div>
        </div>
    </div>
`;

document.body.innerHTML = resultHTML;