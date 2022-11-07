<template>
	<div class="contact">
		<h2>Contact page</h2>
		<div class="contact-wrapper">
			<div class="contact-location">
				<h3>Our Office</h3>
				<p><span>Tel:</span>516 679-3454</p>
				<p><span>Fax:</span>516 679-3454</p>
				<address>358 N Broadway, Hicksville, NY 11801</address>
				<p><span>Hours:</span>Mon-Fri 9am-6pm</p>
			</div>
			<div class="contact-form">
				<h3>Email</h3>
				<p
					>For any questions or comments, please complete this form. We
					will get back to you as soon as possible.</p
				>
				<form @submit.prevent="tryToSubmit">
					<div class="fields">
						<label for="name">Name:</label>
						<input type="text" id="name" v-model="user.name" />
					</div>
					<div class="fields">
						<label for="Phone">Phone:</label>
						<input type="text" id="phone" v-model="user.phone" />
					</div>
					<div class="fields">
						<label for="email">email:</label>
						<input type="email" id="email" v-model="user.email" />
					</div>
					<div class="fields">
						<label for="about">about:</label>
						<select name="" id="about" v-model="user.contactAbout">
							<option value="" disabled>Select</option>
							<option
								:value="choice"
								v-for="choice in about"
								:key="choice"
								>{{ choice }}</option
							>
						</select>
					</div>
					<div class="fields">
						<label for="comments">Comments:</label>
						<textarea
							name="comments"
							id="comments"
							cols="30"
							rows="10"
							v-model="user.comments"
						></textarea>
					</div>
					<button>Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { required,email } from 'vuelidate/lib/validators'

export default {
	data() {
		return {
			user: {
				name: "",
				phone: "",
				email: "",
				comments: "",
				contactAbout: "",
			},
      about: [
					"Customer Service",
					"Suggestions",
					"Sales",
					"advertise with us",
					"Report error",
					"Other",
				],
		};
	},
  validation:{
    user:{
      name:{required},
      phone:{required},
      email:{required,email},
      comments:{required},
      contactAbout:{required},
      
    }
  },
	methods: {
		tryToSubmit() {
      this.$v.touch()

      if(this.$v.$invalid){
          alert("form is ivalid")
        return
      }else{

        alert("form has been submited")
      }
		},
	},
};
</script>

<style lang="scss" scoped>
.contact-wrapper {
	display: flex;
}
</style>
