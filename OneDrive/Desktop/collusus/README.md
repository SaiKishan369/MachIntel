# MachIntel - Industrial Predictive Maintenance Platform

**MachIntel** is a comprehensive AI-powered industrial equipment monitoring and predictive maintenance platform. It provides real-time monitoring, fault detection, and predictive analytics for various industrial machines including motors, pumps, generators, CNC machines, conveyor belts, and elevators.

---

## 🎯 Project Overview

MachIntel is an Industrial Predictive Maintenance as a Service (IPMaaS) platform that leverages machine learning and IoT integration to predict equipment failures before they occur, reducing downtime and maintenance costs for manufacturing plants and industrial facilities.

### Key Capabilities
- **Real-time Equipment Monitoring** - 24/7 monitoring with live sensor data visualization
- **AI-Powered Fault Detection** - Machine learning models predict equipment failures
- **Multi-Device Support** - Monitors motors, pumps, generators, CNC machines, conveyors, and elevators
- **Predictive Analytics** - Schedule maintenance based on actual equipment condition
- **Automated Reporting** - Weekly performance reports with PDF export
- **IoT Integration** - Real-time data from ThingSpeak IoT devices
- **User Authentication** - Secure login system with MongoDB backend

---

## 🏗️ Project Architecture

### Frontend Components

#### 1. **Landing Page** (`/landing`)
- Modern marketing website showcasing platform features
- Animated hero section with 3D effects
- Feature highlights and machine type showcase
- Contact form for lead generation
- Technologies: HTML5, CSS3, JavaScript, Font Awesome

#### 2. **Authentication System** (`/login`)
- User registration and login interface
- Industry-specific signup (company name, industry type)
- Animated form transitions
- Technologies: Node.js, Express, MongoDB, Mongoose, bcrypt.js

#### 3. **Main Dashboard** (`/dashboard.html`)
- Central monitoring interface for all equipment
- Real-time device status cards with health indicators
- Filter devices by status (Healthy, Maintenance, Replace)
- Add/delete devices dynamically
- Live parameter updates (temperature, current, RPM, vibration)
- Device-specific visualizations with images
- Technologies: HTML5, CSS3, JavaScript

#### 4. **Device Details Page** (`/index.html`)
- Detailed view for individual motor parameters
- URL parameter-based data display
- Status badges and metric cards
- Back navigation to dashboard

#### 5. **Business Model Presentation** (`/Bussiness`, `/BusinessModel`)
- Interactive business model flowchart
- Subscription pricing tiers (Basic, Professional, Enterprise)
- Target market analysis
- Two versions: Bootstrap-based and Next.js/React with Framer Motion
- Technologies: Bootstrap, Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion

#### 6. **IoT Real-Time Monitor** (`/collosus3`)
- Live sensor data from ThingSpeak API
- Real-time temperature, current, and RPM display
- Auto-refresh every 5 seconds
- Clean, minimal interface

### Backend Components

#### 1. **ML Prediction Service** (`/collusus2`)
- Flask-based machine learning API
- Multiple trained models for different equipment types:
  - Generator health prediction (Random Forest)
  - Pump fault detection
  - CNC machine monitoring
  - Conveyor belt analysis
  - Elevator health assessment
- Model files stored as `.pkl` (pickle) format
- Feature scaling with StandardScaler
- CSV datasets for training data
- Technologies: Python, Flask, scikit-learn, NumPy, pandas

**Supported Predictions:**
- Generator: Voltage, Current, Frequency, Load, Temperature → Health Status
- Pump: Flow rate, vibration, pressure → Fault Detection
- CNC: Tool wear, spindle load → Maintenance Prediction
- Conveyor: Belt speed, load capacity → Performance Analysis
- Elevator: Load, speed, temperature → Safety Assessment

#### 2. **Report Generation Service** (`/report`)
- Flask web application for automated reporting
- Weekly motor performance reports
- PDF export functionality using ReportLab
- Summary statistics and detailed motor data tables
- AI-powered report insights using Google Gemini API
- Technologies: Python, Flask, pandas, ReportLab, LangChain

**Report Features:**
- Total motors monitored
- Average RPM, temperature, efficiency
- Critical motor alerts
- Detailed performance tables
- PDF download with professional formatting

#### 3. **AI Chatbot Service** (`/bot`)
- Conversational AI assistant using Google Gemini
- Multiple conversation modes:
  - Information mode (factual answers)
  - Religious mode (spiritual guidance)
  - Wellbeing mode (mental health support)
- Multi-language support
- Prompt refinement for better responses
- Technologies: Python, Flask, LangChain, Google Generative AI

#### 4. **Authentication Server** (`/login/login`)
- Express.js REST API
- MongoDB database for user storage
- Password hashing with bcrypt
- CORS enabled for cross-origin requests
- User schema: username, password, industry name, industry type, email
- Technologies: Node.js, Express, MongoDB, Mongoose

---

## 📊 Machine Learning Models

### Model Files (`/collusus2/models`)
- `generator_rf_model.pkl` - Random Forest classifier for generator health
- `pump_fault_model.pkl` - Pump fault detection model
- `cnc.pkl` - CNC machine monitoring model
- `conveyor_belt_model.pkl` - Conveyor belt analysis model
- `elevator.pkl` - Elevator health assessment model
- `scaler.pkl` - Feature scaling transformer
- `label_encoder.pkl` - Label encoding for categorical outputs

### Training Datasets (`/collusus2/data`)
- `generator_health_dataset.csv`
- `pump.csv`
- `cnc_machine_data.csv`
- `conveyor_belt_data.csv`
- `elevator_machine_data.csv`

---

## 🎨 Design System

### Color Scheme
- **Primary Color**: Gold (#FFD700) - Represents premium quality and reliability
- **Secondary Color**: Black (#000000) - Professional and industrial
- **Background**: Dark gray (#1a1a1a, #2d2d2d) - Reduces eye strain for monitoring
- **Status Colors**:
  - Healthy: Green
  - Maintenance Required: Yellow/Orange
  - Must Replace: Red

### UI Components
- Animated status cards with hover effects
- Real-time value updates with smooth transitions
- Modal dialogs for adding devices
- Responsive grid layouts
- SVG icons and device images
- Gradient overlays and glassmorphism effects

---

## 🚀 Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations, flexbox, grid
- **JavaScript (ES6+)** - Dynamic interactions, fetch API
- **React 18** - Component-based UI (BusinessModel)
- **Next.js 14** - Server-side rendering and routing
- **TypeScript** - Type-safe React components
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Icon library
- **Heroicons** - React icon components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Python 3** - ML and data processing
- **Flask** - Python web framework

### Database
- **MongoDB** - NoSQL database for user data

### Machine Learning
- **scikit-learn** - ML model training and prediction
- **pandas** - Data manipulation
- **NumPy** - Numerical computing
- **joblib/pickle** - Model serialization

### AI/NLP
- **LangChain** - LLM application framework
- **Google Gemini API** - Generative AI model
- **ChatGoogleGenerativeAI** - Conversational AI

### IoT Integration
- **ThingSpeak API** - Real-time sensor data ingestion

### Reporting
- **ReportLab** - PDF generation
- **pdfkit** - HTML to PDF conversion

---

## 📁 Project Structure

```
MachIntel/
├── landing/                    # Marketing landing page
│   ├── index.html
│   ├── demo.html
│   ├── styles.css
│   ├── script.js
│   └── img.jpg
│
├── login/login/               # Authentication system
│   ├── index.html
│   ├── server.js              # Express backend
│   ├── script.js
│   ├── style.css
│   ├── package.json
│   └── Industrial_Motor_Temperature_Data.csv
│
├── dashboard.html             # Main monitoring dashboard
├── index.html                 # Device details page
│
├── css/
│   ├── dashboard.css
│   └── styles.css
│
├── js/
│   └── dashboard.js           # Dashboard logic and animations
│
├── Img/                       # Device images
│   ├── motor.png
│   ├── pump.png
│   ├── generator.png
│   ├── cnc.png
│   ├── conveyor.png
│   └── elevator.png
│
├── collusus2/                 # ML prediction service
│   ├── app.py                 # Flask API
│   ├── models/                # Trained ML models (.pkl)
│   ├── data/                  # Training datasets (.csv)
│   ├── templates/
│   │   └── index.html
│   ├── static/
│   │   └── style.css
│   ├── test.ipynb             # Jupyter notebooks
│   └── test2.ipynb
│
├── collosus3/                 # IoT real-time monitor
│   └── index.html             # ThingSpeak integration
│
├── report/report/             # Report generation service
│   ├── main.py                # Flask app with PDF export
│   ├── frontend.py
│   ├── requirements.txt
│   └── readme.md
│
├── bot/bot/                   # AI chatbot service
│   ├── main.py                # LangChain + Gemini
│   ├── frontend.py
│   ├── requirements.txt
│   └── readme.md
│
├── Bussiness/                 # Business model (Bootstrap)
│   ├── index.html
│   ├── flowchart.png
│   └── business-model-flowchart.png
│
├── BusinessModel/             # Business model (Next.js)
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── src/app/
│       ├── page.tsx
│       ├── layout.tsx
│       └── globals.css
│
└── README.md                  # This file
```

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Python (3.8+)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd MachIntel
```

### 2. Setup Authentication Server
```bash
cd login/login
npm install
# Update MongoDB connection string in server.js if needed
node server.js
# Server runs on http://localhost:5000
```

### 3. Setup ML Prediction Service
```bash
cd collusus2
pip install flask numpy pandas scikit-learn joblib
python app.py
# Server runs on http://localhost:5000 (or different port)
```

### 4. Setup Report Service
```bash
cd report/report
pip install -r requirements.txt
python main.py
# Server runs on http://localhost:5000
```

### 5. Setup Chatbot Service
```bash
cd bot/bot
pip install -r requirements.txt
# Add your Google Gemini API key in main.py
python frontend.py
```

### 6. Setup Business Model (Next.js)
```bash
cd BusinessModel
npm install
npm run dev
# Runs on http://localhost:3000
```

### 7. Open Frontend
- Open `landing/index.html` in browser for landing page
- Open `dashboard.html` for main dashboard
- Or use Live Server extension in VS Code

---

## 🎮 Usage Guide

### For End Users

1. **Access Landing Page**
   - Visit the landing page to learn about features
   - Click "Login" to access the platform

2. **Sign Up / Sign In**
   - Create account with company details
   - Login with credentials
   - Redirects to main dashboard

3. **Monitor Equipment**
   - View all devices on dashboard
   - Filter by status (Healthy, Maintenance, Replace)
   - Watch real-time parameter updates
   - Click "Details" for motor-specific information

4. **Add New Devices**
   - Click "Add Device" button
   - Select device type (Motor, Pump, Generator, etc.)
   - Enter device parameters
   - Submit to add to dashboard

5. **Generate Reports**
   - Click "Reports" button on dashboard
   - View weekly performance summary
   - Export as PDF for documentation

6. **IoT Monitoring**
   - Access `/collosus3/index.html` for live ThingSpeak data
   - View real-time sensor readings

### For Developers

1. **Modify ML Models**
   - Update training data in `/collusus2/data/`
   - Retrain models using Jupyter notebooks
   - Save new models as `.pkl` files
   - Update `app.py` prediction logic

2. **Customize Dashboard**
   - Edit `js/dashboard.js` for functionality
   - Modify `css/dashboard.css` for styling
   - Add new device types in `dashboard.js` motor array

3. **Extend API**
   - Add new endpoints in Flask apps
   - Implement additional ML models
   - Integrate new IoT data sources

---

## 🔐 Security Features

- Password hashing with bcrypt (10 rounds)
- MongoDB injection protection via Mongoose
- CORS configuration for API security
- Input validation on all forms
- Secure session management
- Environment variable support for API keys

---

## 📈 Business Model

### Subscription Tiers

**Basic Plan - $99/month**
- Up to 10 devices
- Basic monitoring
- Email alerts
- 24/7 support

**Professional Plan - $299/month**
- Up to 50 devices
- Advanced analytics
- Predictive maintenance
- Priority support

**Enterprise Plan - Custom Pricing**
- Unlimited devices
- Custom solutions
- API access
- Dedicated support

### Target Market
- Manufacturing plants
- Industrial facilities
- Production lines
- Warehouses with automated systems
- Energy generation facilities

---

## 🤖 AI Features

### Chatbot Modes
- **Information Mode**: Factual, neutral answers
- **Religious Mode**: Spiritual guidance
- **Wellbeing Mode**: Mental health support
- **Multi-language**: Responds in user's preferred language

### Report Insights
- AI-generated summaries using Gemini
- Trend analysis
- Maintenance recommendations
- Performance optimization suggestions

---

## 🌐 API Endpoints

### Authentication API
- `POST /api/signup` - Create new user account
- `POST /api/signin` - User login

### ML Prediction API
- `POST /predict` - Predict equipment health status
  - Body: `{voltage, current, frequency, load, temperature}`
  - Response: `{prediction, confidence, ...}`

### Report API
- `GET /` - View report interface
- `GET /get_report` - Generate HTML report
- `GET /export_pdf` - Download PDF report

### Chatbot API
- `POST /chat` - Send message to AI assistant
  - Body: `{message, mode, language}`
  - Response: `{response}`

---

## 🔄 Real-Time Updates

The dashboard implements smooth real-time updates:
- Values change every 1 second
- Smooth transitions with CSS animations
- Status automatically updates based on thresholds
- Color-coded visual feedback
- Crack effects on critical devices

### Update Thresholds
- **Temperature**: Warning >60°C, Critical >70°C
- **Current**: Warning >20A, Critical >25A
- **Vibration**: Warning >1.0mm/s, Critical >1.5mm/s
- **Tool Wear**: Warning >60%, Critical >80%
- **Efficiency**: Warning <85%, Critical <80%

---

## 🎨 Customization

### Adding New Device Types
1. Add device type to `dashboard.js` deviceType select options
2. Add corresponding image to `/Img/` folder
3. Update `createMotorCard()` function for device-specific parameters
4. Train ML model for new device type
5. Add model to `/collusus2/models/`

### Changing Color Scheme
Update CSS variables in `css/styles.css` and `css/dashboard.css`:
```css
:root {
  --primary-color: #FFD700;
  --secondary-color: #000000;
  --background-color: #1a1a1a;
}
```

---

## 🐛 Known Issues & Limitations

- ML models require retraining for different industrial environments
- ThingSpeak API has rate limits (15 seconds between updates)
- PDF generation requires ReportLab library
- MongoDB must be running for authentication
- Some features require specific port configurations
- Chatbot requires valid Google Gemini API key

---

## 🚧 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard with charts
- [ ] Email/SMS alert notifications
- [ ] Multi-tenant support
- [ ] Historical data visualization
- [ ] Maintenance scheduling system
- [ ] Integration with ERP systems
- [ ] Blockchain for audit trails
- [ ] Edge computing for faster predictions
- [ ] AR/VR equipment visualization

---

## 📝 License

This project is proprietary software. All rights reserved.

---

## 👥 Contributors

Developed as an industrial IoT and AI solution for predictive maintenance.

---

## 📞 Support

For technical support or business inquiries, please contact through the platform's contact form.

---

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- ThingSpeak for IoT data platform
- scikit-learn for ML framework
- MongoDB for database solution
- Express.js and Flask communities

---

**MachIntel** - Revolutionizing Industrial Maintenance with AI 