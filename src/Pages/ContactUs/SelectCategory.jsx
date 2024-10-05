
import PropTypes from 'prop-types';

const SelectCategory = ({ formData, setFormData }) => {
    return (
        <div>
            <form className="max-w-md">


                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
                        Your Identity
                    </label>
                    <select
                        className="select w-full max-w-xs text-black"
                        name='category'
                        id='category'
                        value={formData.category}
                        onChange={(event) => setFormData({ ...formData, category: event.target.value })}


                    >
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option >Student</option>
                        <option>Job Finder</option>
                        <option>New In Here</option>

                    </select>

                </div>

                <div className="mb-4 text-black">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Write Message'
                        value={formData.message}
                        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                        rows="4"
                        className="w-full border p-2 rounded"
                        required
                    ></textarea>
                </div>
            </form>

        </div>
    );
};

SelectCategory.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.object

};

export default SelectCategory;