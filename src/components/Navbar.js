import React from 'react';
export default function Navbar() {
    function ul(index) {
	console.log('click!' + index)
	
	const underlines = document.querySelectorAll(".underline");

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
	}
};
    return (
        <>
    <nav class="black">
                <div class="underline"></div>
                <div class="underline"></div>
                <div class="underline"></div>
                <a href="#hero" onClick={() => ul(0)}>Hero</a>
                <a href='#Weather' onClick={() => ul(1)}>weather</a>
                <a href='#about' onClick={() => ul(2)}>About</a>
                <a href='#places' onClick={() => ul(3)}>Places</a>
                <a href='#culture' onClick={() => ul(4)}>Culture</a>
                <a href='#contact' onClick={() => ul(5)}>Contact</a>
            </nav>
        
        </>
    );
}