import React, { useState, useEffect } from 'react';
import { collection, getDoc, getDocs , doc} from 'firebase/firestore';
import { db } from '../firebase'; // Assuming you have a file with your Firebase initialization
import './Dashboard.css'
import Header from '../components/Header';
import Background from '../components/Background';
import DetailLine from '../components/DetailLine';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsCollection = collection(db, 'profile_data');
        // console.log(patientsCollection)
        // const q = query(patientsCollection, where('userName', '==', searchTerm));
        const querySnapshot = await getDocs(patientsCollection);

        // console.log(querySnapshot)

        const patients = []

        const patientsData = querySnapshot.docs.map((doc)=>doc.id);
        // console.log(patientsData)

        for (const mydoc of patientsData) {
          const userId = mydoc;

          console.log(userId)
          const contactdocRef =  doc(db,'contact', userId)
          // const centerdocRef =  doc(db,'center', userId)
          const packagedocRef =  doc(db,'package', userId)
          const medicalDatadocRef =  doc(db,'medicalData', userId)
          const profiledocRef =  doc(db,'profile_data', userId)
          
          // Fetch user data from different collections
          const profileDoc = await getDoc(profiledocRef);
          const contactDoc = await getDoc(contactdocRef);
          // const centerDoc = await getDoc(centerdocRef);
          const packageDoc = await getDoc(packagedocRef);
          const medicalDataDoc = await getDoc(medicalDatadocRef);

          
          // Extract relevant data
          const patient = {
            id: userId,
            FirstName: profileDoc.data()?.firstName ?? '', // set to '' if null or undefined
            contactNumber: contactDoc.data()?.phoneNumber ?? '', // set to '' if null or undefined
            // center: centerDoc.data()?.location ?? '', // set to '' if null or undefined
            packageType: packageDoc.data()?.packageType ?? '', // set to '' if null or undefined
            medicalTests: {
              bloodPressure: medicalDataDoc.data()?.bloodPressure ?? '', // set to '' if null or undefined
              cholesterol: medicalDataDoc.data()?.cholesterol ?? '', // set to '' if null or undefined
              height: medicalDataDoc.data()?.height ?? '', // set to '' if null or undefined
              weight: medicalDataDoc.data()?.weight ?? '', // set to '' if null or undefined
              glucoseLevel: medicalDataDoc.data()?.glucose ?? '', // set to '' if null or undefined
              temperature: medicalDataDoc.data()?.temperature ?? '', // set to '' if null or undefined
              heartRate: medicalDataDoc.data()?.heartRate ?? '', // set to '' if null or undefined
            },
          };
          
          

          patients.push(patient);
        }console.log(patients);

        setPatients(patients);
        setError(null);
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError('Error fetching patients. Please try again.');
      }
    };

    fetchPatients();
  }, [searchTerm]);


  return (
    <div className='dashboard-page'>
      <Header />
      <Background />
      <DetailLine />

      <div className="dashboard-container">
        <div className="user-search-bar">
          <input
            type="text"
            placeholder="Search Users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="user-search-input"
          />
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Center</th>
              <th>Package Type</th>
              <th>Blood Pressure</th>
              <th>Cholesterol</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Glucose Level</th>
              <th>Temperature</th>
              <th>Heart Rate</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.FirstName}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.center}</td>
                <td>{patient.packageType}</td>
                <td>{patient.medicalTests.bloodPressure}</td>
                <td>{patient.medicalTests.cholesterol}</td>
                <td>{patient.medicalTests.height}</td>
                <td>{patient.medicalTests.weight}</td>
                <td>{patient.medicalTests.glucoseLevel}</td>
                <td>{patient.medicalTests.temperature}</td>
                <td>{patient.medicalTests.heartRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {error && <p className="error-message">{error}</p>}
        
      </div>
    </div>
  );
};

export default Dashboard;
