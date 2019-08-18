<template>
	<div class="bg-light py-4">
		<add-user
	    v-show="isModalVisible"
      @close="closeModal"	
      @addNewUser="addItem"	
		/>
		<div class="row px-100 align-items-center ">
			<div class="col-12 col-md-4">
				<div class="row text-center text-md-left">
					<div class="col col-md-2 mb-md-0 mb-2">
						<button type="submit" class="add mr-5" @click="showModal"></button>
					</div>
					<div class="col col-md-10">
						<form class="d-inline-block">
		  				<input type="text" placeholder="Search..." v-model="searchValue" @keyup.enter.prevent>
		  				<button type="submit" class="search" disabled="true"></button>
						</form>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-5 text-center">
				<h6 class="title text-uppercase font-weight-bold">USERS</h6>
			</div>
			<div class="col col-md-3 text-center">
	  		<select v-model="selected" class="btn btn-select">
  				<option v-for="selected in counters" class="rounded-circle">{{selected}}</option>
				</select>
			</div>
		</div>
		<div class="fill-80-viewport bg-light px-100 mt-3">
			<div class="row bg-dark align-items-center rounded">
				<div class="col-4">
					<h5 class="text-light mb-0 d-inline-block"> NAME </h5>
					<button class="fas fa-arrows-alt-v bg-none text-light"  @click="sortItems('name')"></button>
				</div>
				<div class="col-4">
					<h5 class="text-light mb-0 d-inline-block"> E-MAIL </h5>
					<button class="fas fa-arrows-alt-v bg-none text-light"  @click="sortItems('mail')"></button>
				</div>
				<div class="col-4">
					<h5 class="text-light mb-0 d-inline-block"> STATUS </h5>
					<button class="fas fa-arrows-alt-v bg-none text-light"  @click="sortItems('status')"></button>
				</div>
			</div>
			<div class="row align-items-center bg-white mb-1 py-2 itemsPart" v-for="(value, i) of paginatedData">
				<div class="col-4">
					{{ value['name'] }}
				</div>
				<div class="col-4">
					{{ value['mail'] }}
				</div>
				<div class="col-2 pr-2 text-danger" >
					<span :class="{'text-success' : value['status'] == 'Active'}">{{ value['status'] }}</span>
				</div>
				<div class="col-2 text-right">
					<button class="fas fa-edit mx-2 bg-none" @click="showChangeWindow(i)"></button>
					<button class="fas fa-trash-alt mx-2 bg-none" @click="deleteItem(i)"></button>
				</div>
			</div>
			<pag-bar
				:listLength="filteredItems.length"
				:visibleSize="+selected"
				@limit="range = $event"
			/>
		</div>
			<change-user
				v-show="isChangeWindowVisible"
		    @changeCurrentUser="changeItem"
		    :user="listOfItems[index]"
			/>
		</div>
	</div>
</template>
<script>
import ListMixin from './Mixin'

export default {
	data () {
		return {
			pageTitle: 'users',
			listOfItems: [ 
				{	name: 'Python',
					mail: 'P6542',
					status: 'Active'
				},
				{	name: 'Kotlin',
					mail: 'K1236',
					status: 'Inactive'
				}
			]
		}
	},
	mixins: [ListMixin],
	methods: {

		addItem(obj) {
				this.listOfItems.push({ name: obj[0], mail: obj[1], status: obj[2] });
				localStorage.setItem(this.pageTitle, JSON.stringify(this.listOfItems));
		}
	}
};
</script>

<style scoped src="./main.css">
</style>

