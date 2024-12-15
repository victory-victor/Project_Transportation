// Function to alert vehicle details
function showVehicleDetails(vehicleName) {
    alert("You clicked on " + vehicleName);
}

// Add event listeners to vehicle rows and initialize functionality
document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to vehicle rows dynamically
    function addRowClickListeners() {
        const vehicleRows = document.querySelectorAll("#vehicles-table tbody tr");
        vehicleRows.forEach(row => {
            row.addEventListener("click", function () {
                const vehicleName = this.cells[0].innerText; // Get the vehicle name from the first cell
                showVehicleDetails(vehicleName);
            });
        });
    }

    // Add Vehicle functionality
    document.getElementById("addVehicle").addEventListener("click", function () {
        const name = document.getElementById("vehicleName").value;
        const loadingCapacity = document.getElementById("loadingCapacity").value;
        const lastService = document.getElementById("lastService").value;
        const currentStatus = document.getElementById("currentStatus").value;

        if (name && loadingCapacity && lastService) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${loadingCapacity} kg</td>
                <td>${lastService}</td>
                <td>${currentStatus}</td>
            `;
            document.querySelector("#vehicles-table tbody").appendChild(newRow);
            document.getElementById("vehicleName").value = '';
            document.getElementById("loadingCapacity").value = '';
            document.getElementById("lastService").value = '';
            document.getElementById("currentStatus").value = 'Available'; // Reset to default

            // Refresh click listeners
            addRowClickListeners();
        }
    });

    // Add Depot functionality
    document.getElementById("addDepot").addEventListener("click", function () {
        const depotName = document.getElementById("depotName").value;
        const depotLocation = document.getElementById("depotlocation").value;
        const depotLoadingCapacity = document.getElementById("depotLoadingCapacity").value;
        const depotStatus = document.getElementById("depotStatus").value;

        if (depotName && depotLoadingCapacity) {
            const newDepotRow = document.createElement("tr");
            newDepotRow.innerHTML = `
                <td>${depotName}</td>
                <td>${depotLocation}</td>
                <td>${depotLoadingCapacity} kg</td>
                <td>${depotStatus}</td>
            `;
            document.querySelector("#depots-table tbody").appendChild(newDepotRow);
            document.getElementById("depotName").value = '';
            document.getElementById("depotLocation").value = '';
            document.getElementById("depotLoadingCapacity").value = '';
            document.getElementById("depotStatus").value = ''; // Reset to default
        }
    });

    // Add Location functionality
    document.getElementById("addLocation").addEventListener("click", function () {
        const locationName = document.getElementById("locationName").value;
        const locationLatitude = document.getElementById("latitude").value;
        const locationLongitude = document.getElementById("longitude").value;

        if (locationName && locationLatitude && locationLongitude) {
            const newLocationRow = document.createElement("tr");
            newLocationRow.innerHTML = `
                <td>${locationName}</td>
                <td>${locationLatitude} degree</td>
                <td>${locationLongitude} degree</td>
            `;
            document.querySelector("#location-table tbody").appendChild(newLocationRow);
            document.getElementById("locationName").value = '';
            document.getElementById("locationLatitude").value = '';
            document.getElementById("locationLongitude").value = 'Operational'; // Reset to default
        }
    });

   

    // Initialize row click listeners
    addRowClickListeners();
});
