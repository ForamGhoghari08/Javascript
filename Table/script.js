let students = []

const UiMaker = () => {
    document.getElementById("tbody").innerHTML = ""

    students.map((ele) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = ele.name
        let td2 = document.createElement("td")
        td2.innerHTML = ele.course
        let td3 = document.createElement("td")
        td3.innerHTML = ele.grid
        tr.append(td1, td2, td3)
        console.log(tr);
        document.getElementById("tbody").append(tr)
    })
}

const handleStudentData = (e) => {
    e.preventDefault();

    let data = {
        name: document.getElementById('name').value,
        course: document.getElementById('course').value,
        grid: document.getElementById('grid').value
    }

    students.push(data);

    UiMaker()

}

const handleDelete = () => {

    document.getElementById("tbody").innerHTML = ""
    students = []

}


document.getElementById("studentData").addEventListener("submit", handleStudentData)

document.getElementById("deleteAll").addEventListener("click", handleDelete)