document.addEventListener('DOMContentLoaded', () => {
    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const status = button.dataset.status;
            filterMotors(status);
        });
    });

    // Setup Reports button
    const reportsBtn = document.getElementById('reportsBtn');
    reportsBtn.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5000/';
    });

    // Setup Add Motor Modal
    const modal = document.getElementById('addMotorModal');
    const addMotorBtn = document.getElementById('addMotorBtn');
    const closeModal = document.querySelector('.close-modal');
    const addMotorForm = document.getElementById('addMotorForm');

    addMotorBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    addMotorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewMotor();
        modal.style.display = 'none';
    });

    // Initial load of motors
    loadMotors();
});

// Initial motor data
let motors = [
    {
        id: 1,
        type: 'motor',
        name: 'Main Drive Motor',
        status: 'healthy',
        temperature: '45°C',
        current: '15A',
        rpm: '1750'
    },
    {
        id: 2,
        type: 'pump',
        name: 'Coolant Pump',
        status: 'maintenance',
        temperature: '55°C',
        current: '12A',
        rpm: '1450',
        vibration: '0.8 mm/s',
        flowRateIn: '95 L/min',
        flowRateOut: '90 L/min'
    },
    {
        id: 3,
        type: 'generator',
        name: 'Backup Generator',
        status: 'healthy',
        temperature: '50°C',
        current: '20A',
        rpm: '1800'
    },
    {
        id: 4,
        type: 'elevator',
        name: 'Cargo Elevator',
        status: 'replace',
        temperature: '65°C',
        current: '25A',
        rpm: '1200'
    },
    {
        id: 5,
        type: 'cnc',
        name: 'CNC Milling Machine',
        status: 'healthy',
        temperature: '42°C',
        current: '18A',
        rpm: '2400',
        toolWear: '15%',
        spindleLoad: '65%'
    },
    {
        id: 6,
        type: 'conveyor',
        name: 'Assembly Line Conveyor',
        status: 'healthy',
        temperature: '38°C',
        current: '10A',
        rpm: '60',
        beltSpeed: '0.5 m/s',
        loadCapacity: '75%'
    }
];

function addNewMotor() {
    const deviceType = document.getElementById('deviceType').value;
    let newMotor;

    if (deviceType === 'pump') {
        newMotor = {
            id: motors.length + 1,
            type: deviceType,
            name: document.getElementById('motorName').value,
            status: document.getElementById('motorStatus').value,
            temperature: document.getElementById('motorTemp').value + '°C',
            vibration: document.getElementById('motorVibration').value + ' mm/s',
            flowRateIn: document.getElementById('motorFlowRateIn').value + ' L/min',
            flowRateOut: document.getElementById('motorFlowRateOut').value + ' L/min',
            current: document.getElementById('motorCurrent').value + 'A',
            rpm: document.getElementById('motorRPM').value
        };
    } else {
        newMotor = {
            id: motors.length + 1,
            type: deviceType,
            name: document.getElementById('motorName').value,
            status: document.getElementById('motorStatus').value,
            temperature: document.getElementById('motorTemp').value + '°C',
            current: document.getElementById('motorCurrent').value + 'A',
            rpm: document.getElementById('motorRPM').value
        };
    }

    motors.push(newMotor);
    loadMotors();
    addMotorForm.reset();
}

function loadMotors() {
    const motorsGrid = document.getElementById('motorsGrid');
    motorsGrid.innerHTML = '';

    motors.forEach(motor => {
        const motorCard = createMotorCard(motor);
        motorsGrid.appendChild(motorCard);
    });
}

function createMotorCard(motor) {
    const card = document.createElement('div');
    card.className = `motor-card ${motor.status}`;
    card.dataset.status = motor.status;
    card.dataset.id = motor.id;

    const statusClass = `status-${motor.status}`;
    const statusText = motor.status.charAt(0).toUpperCase() + motor.status.slice(1);

    // Get the appropriate image based on device type
    let deviceImage = 'motor.png'; // default image
    switch(motor.type) {
        case 'pump':
            deviceImage = 'pump.png';
            break;
        case 'conveyor':
            deviceImage = 'conveyor.png';
            break;
        case 'generator':
            deviceImage = 'generator.png';
            break;
        case 'elevator':
            deviceImage = 'elevator.png';
            break;
        case 'cnc':
            deviceImage = 'cnc.png';
            break;
        default:
            deviceImage = 'motor.png';
    }

    // Create the base details HTML
    let detailsHTML = `
        <div class="detail-item">
            <span class="detail-label">Temperature</span>
            <span class="detail-value">${motor.temperature}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">Current</span>
            <span class="detail-value">${motor.current}</span>
        </div>
        <div class="detail-item">
            <span class="detail-label">RPM</span>
            <span class="detail-value">${motor.rpm}</span>
        </div>
    `;

    // Add CNC-specific details
    if (motor.type === 'cnc') {
        detailsHTML += `
            <div class="detail-item">
                <span class="detail-label">Tool Wear</span>
                <span class="detail-value">${motor.toolWear}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Spindle Load</span>
                <span class="detail-value">${motor.spindleLoad}</span>
            </div>
        `;
    }

    // Add Conveyor-specific details
    if (motor.type === 'conveyor') {
        detailsHTML += `
            <div class="detail-item">
                <span class="detail-label">Belt Speed</span>
                <span class="detail-value">${motor.beltSpeed}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Load Capacity</span>
                <span class="detail-value">${motor.loadCapacity}</span>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="motor-header">
            <h3 class="motor-name">${motor.type} - ${motor.name}</h3>
            <div class="header-actions">
                <span class="motor-status ${statusClass}">${statusText}</span>
                <button class="delete-btn" title="Delete Device">×</button>
            </div>
        </div>
        <div class="motor-details">
            ${detailsHTML}
        </div>
        <div class="motor-visual">
            <img src="${deviceImage}" alt="${motor.type}" class="motor-image">
            <div class="crack-effect"></div>
        </div>
        <div class="motor-actions">
            <button class="action-btn primary details-btn" ${motor.type !== 'motor' ? 'disabled' : ''}>Details</button>
            <button class="action-btn secondary">History</button>
        </div>
    `;

    // Add delete functionality
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this device?')) {
            deleteMotor(motor.id);
        }
    });

    // Add details button functionality only for motor type
    const detailsBtn = card.querySelector('.details-btn');
    if (motor.type === 'motor') {
        detailsBtn.addEventListener('click', () => {
            const params = new URLSearchParams({
                id: motor.id,
                type: motor.type,
                name: motor.name,
                status: motor.status,
                temperature: motor.temperature,
                current: motor.current,
                rpm: motor.rpm
            });
            window.location.href = `http://127.0.0.1:5503/index.html?${params.toString()}`;
        });
    } else {
        detailsBtn.style.opacity = '0.5';
        detailsBtn.style.cursor = 'not-allowed';
    }

    return card;
}

function deleteMotor(motorId) {
    // Remove motor from the array
    motors = motors.filter(motor => motor.id !== motorId);
    // Reload the motors grid
    loadMotors();
}

function filterMotors(status) {
    const motors = document.querySelectorAll('.motor-card');
    motors.forEach(motor => {
        const motorStatus = motor.dataset.status;
        if (status === 'all') {
            motor.style.display = 'block';
        } else if (status === motorStatus) {
            motor.style.display = 'block';
        } else {
            motor.style.display = 'none';
        }
    });
}

// Function to generate smooth, uniform value changes
function generateSmoothValue(currentValue, min, max, step = 1) {
    const current = parseFloat(currentValue);
    const target = current + (Math.random() * 2 - 1) * step; // Random target within step range
    
    // Ensure the target stays within bounds
    const boundedTarget = Math.max(min, Math.min(max, target));
    
    // Calculate the new value as a weighted average between current and target
    // This creates a smoother transition
    const smoothingFactor = 0.2; // Adjust this value to control smoothness (0.1 to 0.3 is good)
    const newValue = current + (boundedTarget - current) * smoothingFactor;
    
    // Format the value based on the type
    if (currentValue.includes('°C')) {
        return `${newValue.toFixed(1)}°C`;
    } else if (currentValue.includes('A')) {
        return `${newValue.toFixed(2)}A`;
    } else if (currentValue.includes('mm/s')) {
        return `${newValue.toFixed(1)} mm/s`;
    } else if (currentValue.includes('L/min')) {
        return `${Math.round(newValue)} L/min`;
    } else if (currentValue.includes('%')) {
        return `${Math.round(newValue)}%`;
    } else {
        return Math.round(newValue);
    }
}

// Function to update motor values
function updateMotorValues(motor) {
    // Define safe ranges and step sizes for each parameter
    const ranges = {
        temperature: { min: 30, max: 70, step: 0.2 },
        current: { min: 5, max: 30, step: 0.05 },
        rpm: { min: 1000, max: 2000, step: 5 },
        vibration: { min: 0, max: 2, step: 0.05 },
        flowRateIn: { min: 80, max: 120, step: 0.5 },
        flowRateOut: { min: 75, max: 115, step: 0.5 },
        toolWear: { min: 0, max: 100, step: 0.5 },
        spindleLoad: { min: 0, max: 100, step: 0.5 },
        loadCapacity: { min: 0, max: 100, step: 0.5 }
    };

    // Update each parameter with smooth changes
    if (motor.temperature) {
        const currentTemp = parseFloat(motor.temperature);
        motor.temperature = generateSmoothValue(currentTemp, ranges.temperature.min, ranges.temperature.max, ranges.temperature.step) + '°C';
    }
    if (motor.current) {
        const currentCurrent = parseFloat(motor.current);
        motor.current = generateSmoothValue(currentCurrent, ranges.current.min, ranges.current.max, ranges.current.step) + 'A';
    }
    if (motor.rpm) {
        const currentRPM = parseFloat(motor.rpm);
        motor.rpm = generateSmoothValue(currentRPM, ranges.rpm.min, ranges.rpm.max, ranges.rpm.step);
    }
    if (motor.vibration) {
        const currentVibration = parseFloat(motor.vibration);
        motor.vibration = generateSmoothValue(currentVibration, ranges.vibration.min, ranges.vibration.max, ranges.vibration.step) + ' mm/s';
    }
    if (motor.flowRateIn) {
        const currentFlowIn = parseFloat(motor.flowRateIn);
        motor.flowRateIn = generateSmoothValue(currentFlowIn, ranges.flowRateIn.min, ranges.flowRateIn.max, ranges.flowRateIn.step) + ' L/min';
    }
    if (motor.flowRateOut) {
        const currentFlowOut = parseFloat(motor.flowRateOut);
        motor.flowRateOut = generateSmoothValue(currentFlowOut, ranges.flowRateOut.min, ranges.flowRateOut.max, ranges.flowRateOut.step) + ' L/min';
    }
    if (motor.toolWear) {
        const currentToolWear = parseFloat(motor.toolWear);
        motor.toolWear = generateSmoothValue(currentToolWear, ranges.toolWear.min, ranges.toolWear.max, ranges.toolWear.step) + '%';
    }
    if (motor.spindleLoad) {
        const currentSpindleLoad = parseFloat(motor.spindleLoad);
        motor.spindleLoad = generateSmoothValue(currentSpindleLoad, ranges.spindleLoad.min, ranges.spindleLoad.max, ranges.spindleLoad.step) + '%';
    }
    if (motor.loadCapacity) {
        const currentLoadCapacity = parseFloat(motor.loadCapacity);
        motor.loadCapacity = generateSmoothValue(currentLoadCapacity, ranges.loadCapacity.min, ranges.loadCapacity.max, ranges.loadCapacity.step) + '%';
    }

    // Update status based on values
    updateMotorStatus(motor);
}

// Function to update motor status based on values
function updateMotorStatus(motor) {
    const temp = parseFloat(motor.temperature);
    const current = parseFloat(motor.current);
    const vibration = motor.vibration ? parseFloat(motor.vibration) : 0;
    const toolWear = motor.toolWear ? parseFloat(motor.toolWear) : 0;
    const spindleLoad = motor.spindleLoad ? parseFloat(motor.spindleLoad) : 0;
    const loadCapacity = motor.loadCapacity ? parseFloat(motor.loadCapacity) : 0;
    
    // Define status thresholds
    const criticalTemp = 70;
    const warningTemp = 60;
    const criticalCurrent = 25;
    const warningCurrent = 20;
    const criticalVibration = 1.5;
    const warningVibration = 1.0;
    const criticalToolWear = 80;
    const warningToolWear = 60;
    const criticalSpindleLoad = 90;
    const warningSpindleLoad = 75;
    const criticalLoadCapacity = 90;
    const warningLoadCapacity = 75;

    // Check for critical conditions
    if (temp > criticalTemp || 
        current > criticalCurrent || 
        vibration > criticalVibration ||
        toolWear > criticalToolWear ||
        spindleLoad > criticalSpindleLoad ||
        loadCapacity > criticalLoadCapacity) {
        motor.status = 'replace';
    }
    // Check for warning conditions
    else if (temp > warningTemp || 
             current > warningCurrent || 
             vibration > warningVibration ||
             toolWear > warningToolWear ||
             spindleLoad > warningSpindleLoad ||
             loadCapacity > warningLoadCapacity) {
        motor.status = 'maintenance';
    }
    // Otherwise healthy
    else {
        motor.status = 'healthy';
    }

    // Update the card's status class
    const card = document.querySelector(`.motor-card[data-id="${motor.id}"]`);
    if (card) {
        card.className = `motor-card ${motor.status}`;
        card.dataset.status = motor.status;
        const statusElement = card.querySelector('.motor-status');
        if (statusElement) {
            statusElement.className = `motor-status status-${motor.status}`;
            statusElement.textContent = motor.status.charAt(0).toUpperCase() + motor.status.slice(1);
        }
    }
}

// Function to smoothly update the UI
function updateMotorCardUI(motor) {
    const card = document.querySelector(`.motor-card[data-id="${motor.id}"]`);
    if (!card) return;

    // Update status
    const statusElement = card.querySelector('.motor-status');
    statusElement.className = `motor-status status-${motor.status}`;
    statusElement.textContent = motor.status.charAt(0).toUpperCase() + motor.status.slice(1);

    // Update values with smooth transition
    const updateValue = (selector, newValue) => {
        const element = card.querySelector(selector);
        if (element) {
            element.style.transition = 'color 0.5s ease';
            element.style.color = '#ffd700';
            setTimeout(() => {
                element.textContent = newValue;
                element.style.color = '';
            }, 500);
        }
    };

    // Update all values
    updateValue('.detail-value:nth-child(1)', motor.temperature);
    updateValue('.detail-value:nth-child(2)', motor.current);
    updateValue('.detail-value:nth-child(3)', motor.rpm);
}

// Update interval for smoother changes
setInterval(() => {
    motors.forEach(motor => {
        updateMotorValues(motor);
        updateMotorCardUI(motor);
    });
}, 1000); // Update every second for smoother transitions 