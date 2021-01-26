const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    console.log(cityVal);

    if (cityVal === "") {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add("data_hide");
    } else {

        try {


            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f1f2c0edc52839749249d0add7a9583`
            const response = await fetch(url); // async wait

            const data = await response.json(); // convert json to object

            const arrData = [data]; // array of object

            console.log(arrData);

            document.getElementById('city_name').innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            document.getElementById('temp_real_val').innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);


            // get day, date, month          
            var d = new Date();
            var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = months[d.getMonth()];
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const day = days[d.getDay()];
            const date = d.getDate();
            document.getElementById("day").innerHTML = day;
            document.getElementById("date").innerHTML = `${date}, ${month}`;



            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                document.getElementById('temp_status').innerHTML =
                    "<i class='fas  fa-sun' style=' color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                document.getElementById('temp_status').innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                document.getElementById('temp_status').innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                document.getElementById('temp_status').innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";


        } catch {
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText = `please enter the proper city name`;
            console.log('please add the proper city name');
        }

    }
}

submitBtn.addEventListener('click', getInfo);