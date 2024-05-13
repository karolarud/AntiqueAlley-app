export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the weather api page")

  
    // Fetch weather data from external API
    const res2 = await fetch('http://api.weatherapi.com/v1/current.json?key=198bfa1d986946f4b81135742240404&q=Dublin&aqi=no')
    const data = await res2.json()

    // Extract current temperature from the fetched data
    let currentTemp = data.current.temp_c
   
    // Log the current temperature
    console.log(data.current.temp_c)

      
    // Send the current temperature as a JSON response
    return Response.json({"temp": currentTemp})


   
  }
  
  