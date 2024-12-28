import React, { useEffect } from 'react'
import InputField from '../addCloth/InputField'
import SelectField from '../addCloth/SelectField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchClothByIdQuery, useUpdateClothMutation } from '../../../redux/features/clothes/clothApi';
import Swal from 'sweetalert2';

const UpdateCloth = () => {
    const {id}=useParams();
    const {data: clothData,isLoading,isError,refetch}=useFetchClothByIdQuery(id)
    const [updateCloth]=useUpdateClothMutation()
    const { register, handleSubmit, setValue, reset } = useForm();

    useEffect(()=>{
        if(clothData){
            setValue('name',clothData.name);
            setValue('description',clothData.description);
            setValue('category',clothData.category);
            setValue('trending',clothData.trending);
            setValue('image',clothData.image);
            setValue('oldPrice',clothData.oldPrice);
            setValue('newPrice',clothData.newPrice);
        }
    })
    const onSubmit = async (data) => {
        const updateClothData={
            name:data.name,
            description:data.description,
            category:data.category,
            trending:data.trending,
            oldPrice:Number(data.oldPrice),
            newPrice:Number(data.newPrice),
            image:data.image,

        };

        const headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        };
        
        try {
            await updateCloth({id, updateClothData}).unwrap();

            Swal.fire({
                title: "Cloth updated",
                text: "Your cloth is updated successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
            });
            await axios.put(`http://localhost:3000/api/clothes/edit/67590b0a34d26e69ff8b902b`)
        } catch (error) {
            console.log("Failed to update");
            alert("Failed to update cloth");

            
        }

    }
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Cloth</h2>

  <form onSubmit={handleSubmit(onSubmit)}>
    <InputField
      label="Name"
      name="name"
      placeholder="Enter cloth name"
      register={register}
    />

    <InputField
      label="Description"
      name="description"
      placeholder="Enter cloth description"
      type="textarea"
      register={register}
    />

    <SelectField
      label="Category"
      name="category"
      options={[

       
        { value: '', label: 'Choose A Category' },
        { value: 'Tops', label: 'Tops' },
        { value: 'Bottoms', label: 'Bottoms' },
        { value: 'fashion', label: 'Fashion' },
        { value: 'Outerwear', label: 'Outerwear' },
        { value: 'Accessories', label: 'Accessories' },
      ]}
      register={register}
    />
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

    <InputField
      label="Old Price"
      name="oldPrice"
      type="number"
      placeholder="Old Price"
      register={register}
    />

    <InputField
      label="New Price"
      name="newPrice"
      type="number"
      placeholder="New Price"
      register={register}
    />

    <InputField
      label="Cover Image URL"
      name="coverImage"
      type="text"
      placeholder="Cover Image URL"
      register={register}
    />

    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
      Update Cloth
    </button>
  </form>
</div>

  )
}

export default UpdateCloth