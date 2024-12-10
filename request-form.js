// automatically select a course from the list if provided in the URL searchParams
document.addEventListener("DOMContentLoaded", ()=>{
	let search_params = new URLSearchParams(document.location.search);

	if (search_params.course) {
		[...document.querySelector(`select#course`)].find((a)=>{return a.value == search_params.course}).selected = true;
	}
})