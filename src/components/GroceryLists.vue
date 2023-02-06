<template>
    <div class="s-center max-w-3xl p-5">
        <div class="s-center max-w-3xl w-full mb-10">
            <button type="button" @click="openModal" class="rounded bg-lime-600 hover:bg-lime-400 text-white px-4 py-2 float-right" v-if="showModal == false"><i class="fa-solid fa-plus"></i> Add Item</button>
            <button type="button" @click="closeModal" class="rounded bg-red-600 hover:bg-red-400 text-white px-4 py-2 float-right" v-if="showModal"><i class="fa-solid fa-minus"></i> Close</button>
        </div>
        
        <form @submit.prevent="onUpdate" class="s-center max-w-3xl" v-if="showModal">
            <input v-model="id" type="hidden" name="id" id="id" class="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" />
            <br>
            <label class="block">
            <span class="block text-sm font-medium text-slate-700">Product Name</span>
            <input v-model="productName" type="text" name="productName" class="w-full mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" required />
            </label>
            <br>
            <label class="block">
            <span class="block text-sm font-medium text-slate-700">Quantity</span>
            <input v-model="quantity" type="number" name="quantity" class="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" required />
            </label>
            <br>
            <button type="submit" class="w-full rounded bg-lime-600 hover:bg-lime-400 text-white px-4 py-2">Save Item</button>
        </form>
        <br><br><br>
        <div class="shadow-md sm:rounded-lg -center s-center max-w-3xl w-full my-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b" :key="List.id" v-for="List in Lists">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ List.productName }}
                        </th>
                        <td class="px-6 py-4">
                            {{ List.quantity }}
                        </td>
                        <td class="px-6 py-4">
                            <i class="fa-solid fa-pen-to-square text-blue-600 hover:text-blue-300 cursor-pointer mx-2" title="Edit Item" @click="onEdit(List); openModal()"></i>
                            <i class="fa-solid fa-trash text-red-600 hover:text-red-300 cursor-pointer mx-2" title="Delete Item" @click="onDelete(List.id)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'GroceryLists',
        data() {
            return {
                id: 0,
                productName: "",
                quantity: 0,
                showModal: false
            }
        },
        props: {
            Lists: Array
        },
        components: {
        },
        methods: {
            onUpdate() {
                if(this.id > 0){
                    axios.put(axios.defaults.baseURL, {
                        id: this.id, 
                        productName: this.productName, 
                        quantity: this.quantity
                    })
                    .then(response => {
                        console.log(response.data);
                    })
                }else{
                    axios.post(
                    axios.defaults.baseURL, 
                    {
                        productName: this.productName, 
                        quantity: this.quantity
                    }
                    )
                    .then((response) => console.log(response))
                }
                window.location.reload();
            },
            onDelete(id) {
                axios.delete(axios.defaults.baseURL + '?id=' + id)
                .then(() => console.log("Deleted"));
                window.location.reload();
            },
            onEdit(List) {
                this.id = List.id,
                this.productName = List.productName,
                this.quantity = List.quantity
            },
            openModal() {
                this.showModal = true
            },
            closeModal() {
                this.showModal = false
            }
        }
    }
</script>