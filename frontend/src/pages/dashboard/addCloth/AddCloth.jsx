
import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form';
import { useAddClothMutation } from '../../../redux/features/clothes/clothApi'; // Updated import
import Swal from 'sweetalert2';

const AddCloth = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const [addCloth, { isLoading, isError }] = useAddClothMutation(); // Updated hook
    const [imageFileName, setImageFileName] = useState('');

    const onSubmit = async (data) => {
        const newClothData = {
            ...data,
            image: imageFileName
        };

        try {
            await addCloth(newClothData).unwrap(); // Updated mutation
            // console.log(response);  
            Swal.fire({
                title: "Cloth added",
                text: "Your cloth is uploaded successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
            });
            reset();
            setImageFileName('');
            setImageFile(null);
        } catch (error) {
            console.error(error);
            alert("Failed to add cloth. Please try again.");
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileName(file.name);
        }
    };

    return (
        <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Cloth</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                {/* Reusable Input Field for Title */}
                <InputField
                    label="Name"
                    name="name"
                    placeholder="Enter cloth name"
                    register={register}
                />

                {/* Reusable Textarea for Description */}
                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter cloth description"
                    type="textarea"
                    register={register}
                />

                {/* Reusable Select Field for Category */}
                <SelectField
                    label="Category"
                    name="category"
                   

                    options={[
                        { value: '', label: 'Choose A Category' },
                        { value: 'Tops', label: 'Tops' },
                        { value: 'Bottoms', label: 'Bottoms' },
                        { value: 'Outerwear', label: 'Outerwear' },
                        { value: 'Accessories', label: 'Accessories' },
                    ]}
                    register={register}
                />

                {/* Trending Checkbox */}
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            {...register('trending')}
                            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
                    </label>
                </div>

                {/* Old Price */}
                <InputField
                    label="Old Price"
                    name="oldPrice"
                    type="number"
                    placeholder="Old Price"
                    register={register}
                />

                {/* New Price */}
                <InputField
                    label="New Price"
                    name="newPrice"
                    type="number"
                    placeholder="New Price"
                    register={register}
                />

                {/* Cover Image Upload */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
                    {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                    {
                        isLoading ? <span>Adding.. </span> : <span>Add Cloth</span>
                    }
                </button>
            </form>
        </div>
    );
};

export default AddCloth;
