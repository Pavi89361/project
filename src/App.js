import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
// import Register from './Component/Register/Register';
import Shome from './Component/Student/Shome/Shome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Main from './Component/Main/Main';
import Dashboard from './Component/Admin/Dashboard';
import Course from './Component/Student/Course/Course.js';
import Teacher from './Component/Student/Teacher/Teacher.js';
import Homepage from './Component/Student/Homepage/Homepage.js';
import Thome from './Component/Empolye/Trainer/Thome.js';
import ViewStudent from './Component/Admin/Viewstudent.js';
import Upload from './Component/Empolye/Trainer/Upload.js';
import AddStudent from './Component/Admin/AddStudent.js';
import AddDeveloper from './Component/Admin/AddDeveloper.js';
import Viewdeveloper from './Component/Admin/Viewdeveloper.js';
import Viewtrainer from './Component/Admin/Viewtrainer.js';
import Adminhome from './Component/Admin/Adminhome.js';
import Developer from './Component/Empolye/Developer/Developer.js';
import Newproject from './Component/Empolye/Developer/Newproject.js';
import Completed from './Component/Empolye/Developer/Completed.js';
import Ongoing from './Component/Empolye/Developer/Ongoing.js';
import Homepages from './Component/Empolye/Developer/Homepages.js';
import Certificate from './Component/Admin/Certificate.js';
import Feesdetails from './Component/Admin/Feesdetails.js';
import Allproject from './Component/Admin/Allproject.js';
import Trainerhome from './Component/Empolye/Trainer/Trainerhome.js';
import Task from './Component/Student/Task/Task.js';
import Addtrainer from './Component/Admin/Addtrainer.js';
import Update from './Component/Admin/Update.js';
import Devupdate from './Component/Admin/Devupdate.js';
import Payment from './Component/Student/Payments/Payment.js';
import Mainmenu from './Component/Student/Playlist/Mainmenu.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path='/Trainer-home' element={<Navigate to={'/Trainer-Home/Homepage'}/>}/>
          
          <Route path="/Trainer-home" element={<Thome />}>
            <Route path='Homepage' element={<Trainerhome />} />
            <Route path='Course' element={<Course />} />
            <Route path='View-student' element={<ViewStudent />}></Route>
            <Route path='Upload-video' element={<Upload />}></Route>
          </Route>
          <Route path='/Student-Home' element={<Navigate to={'/Student-Home/Homepage'}/>}/>
         
          <Route path="/Student-Home" element={<Shome />}>
            <Route path='Homepage' element={<Homepage />}/>
            <Route path='view-course' element={<Course />}></Route>
            <Route path='payment' element={<Payment />}></Route>
            <Route path='Upload-task' element={<Task />}></Route>
            <Route path='Teacher' element={<Teacher />}></Route>
            <Route path='playlist' element={<Mainmenu />} />
          </Route>
          
          <Route path='/Admindashboard' element={<Navigate to={'/Admindashboard/Home'}/>}/>
          <Route path="/Admindashboard" element={<Dashboard />}>
            <Route path='All-Project' element={<Allproject />}></Route>
            <Route path='Certificate' element={<Certificate />}></Route>
            <Route path='Add-student' element={<AddStudent />}></Route>
            <Route path='Home' element={<Adminhome />}></Route>
            <Route path='View-student' element={<ViewStudent />}></Route>
            <Route path='Add-developer' element={<AddDeveloper />}></Route>
            <Route path='Add-trainer' element={<Addtrainer />}></Route>
            <Route path='View-developer' element={<Viewdeveloper />}></Route>
            <Route path='View-trainer' element={<Viewtrainer />}></Route>
            <Route path='Fees-details' element={<Feesdetails />}></Route>
          </Route>
          <Route path='/Developer-home' element={<Navigate to={'/Developer-home/Homepage'}/>}/>
          <Route path='/Developer-home' element={<Developer />}>
            <Route path='Homepage' element={<Homepages />} />
            <Route path='New-Project' element={<Newproject />} />
            <Route path='Ongoing-Project' element={<Ongoing />} />
            <Route path='Completed-Project' element={<Completed />} />
          </Route>
          <Route path='/Update/:id' element={<Update />} />
          <Route path='/devupdate/:id' element={<Devupdate />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
