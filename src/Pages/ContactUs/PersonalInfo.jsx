
const PersonalInfo = ({formData, setFormData}) => {
    return (
        <div>
            <form  className="max-w-md" onSubmit={setFormData}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
           
            value={formData.name}
            onChange={(event) => setFormData({...formData, name: event.target.value})}
            className="w-full border p-2 rounded text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
            Your Email
          </label>
          <input
            type="email"
            placeholder='Email'
            id="email"
            name="email"
            value={formData.email}
            onChange={(event) => setFormData({...formData, email: event.target.value})}
           
            className="w-full border p-2 rounded text-black"
            required
          />
        </div>

       

       
      </form>
        </div>
    );
};



export default PersonalInfo;