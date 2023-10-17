import React, { useState} from 'react';
import ReactDOM from 'react-dom';






const welcome = 'Rezervasyon Uygulaması'
const subtitle = 'Yeni Rezervasyon Ekle'
const title = 'Rezervasyonlar'
const name ='Adı'
const email = 'Email'
const phone ='Telefon Numarası'
// const branch ='Şube Seçimi'
const datedayandhour ='Rezervasyon Günü ve Saati'
const note = 'Eklemek İstediği Not'
const addreservation = 'Rezervasyon Ekle'
 
const Header = ()=> (
<header >
   <div className='header-wrapper'>
   <h1>{welcome}</h1>
   </div>
  </header>
)

const ResList = ()=> (
  <div className="reservation-list">
    <h2>{title}</h2>
    <ul id="reservation-list">
    </ul>
  </div>
  

)

const Form = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    reservationDate: '',
    notes: '',
  });

  const [reservations, setReservations] = useState([]);

 const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = { ...formData, id: Date.now() };
    setReservations([...reservations, newReservation]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      branch: '',
      reservationDate: '',
      notes: '',
    });
    showReservations();

    
  };

  const showReservations = ()=> {
    const reservationList = reservations.map((reservation) => (
      <div key={reservation.id}>
        <p><strong>Adı:</strong> {reservation.name}</p>
        <p><strong>Email:</strong> {reservation.email}</p>
        <p><strong>Telefon:</strong> {reservation.phone}</p>
        <p><strong>Şube Seçimi:</strong> {reservation.branch}</p>
        <p><strong>Rezervasyon Tarihi ve Saati:</strong> {reservation.reservationDate}</p>
        <p><strong>Not:</strong> {reservation.notes}</p>
      </div>
    ));

    return (
      <div className="reservation-list">
        <h2>Rezervasyonlar</h2>
        {reservationList} 
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  return (
 <div>
    <form id="reservation-form" onSubmit={handleSubmit}>
    {/* <label htmlFor="name">{name} *</label> */}
    <input type="text" name="name" placeholder={name} value={formData.name} onChange={handleChange} required/>
    {/* <label htmlFor="email">{email} *</label> */}
    <input type="email" name="email" placeholder={email} value={formData.email} onChange={handleChange}  required/>
    {/* <label htmlFor="phone">{phone} *</label> */}
    <input type="tel" name="phone" placeholder={phone} value={formData.phone} onChange={handleChange} required/>    
    {/* <label htmlFor="branch">{branch} </label> */}
    <select name="branch" value={formData.branch} onChange={handleChange} >
        <option value="">Şube Seçimi</option>
        <option value="Şube 1">Şube 1</option>
        <option value="Şube 2">Şube 2</option>
        <option value="Şube 3">Şube 3</option>
    </select>

    <label htmlFor="reservation-date">{datedayandhour} *</label>
    <input type="datetime-local" name="reservationDate" value={formData.reservationDate} onChange={handleChange} required/>
    {/* <label htmlFor='notes'>{note}</label> */}
    <textarea name="notes" placeholder={note} value={formData.notes} onChange={handleChange} rows={4}></textarea>
    <Buton />
  </form>
  {showReservations()}
 </div>

  );};

  
const Main = () => (
  <main>
    <div className='main-wrapper form-container'>
      <h2>{subtitle}</h2>
      <Form />
    </div>
  </main>
)



const Buton = ()=> (
  <button >{addreservation}</button>
)




const App =() =>(
  <div className='app'>
    <Header />
    <Main/>
  </div>
)



const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement);