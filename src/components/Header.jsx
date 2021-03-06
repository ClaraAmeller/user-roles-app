import React from "react";

const Header = () => (
	<div className="flex bg-white border-b border-grey-lighter fixed pin-t pin-x z-100 h-16 items-center">
		<div className="w-full max-w-screen-xl relative mx-auto px-6">
			<div className="flex items-center lg:mx-6">
				<h1
					style={{ fontFamily: "Staatliches" }}
					className="lg:w-1/3 xl:w-1/5 px-3 lg:px-6 lg:pr-8 text-lg lg:text-2xl"
				>
					Clara Ameller
				</h1>
				<div className="flex flex-grow items-center lg:w-2/3 xl:w-4/5">
					<h1
						className="w-full text-center lg:px-6 lg:w-2/3 xl:px-12 text-lg lg:text-2xl"
					>
						User roles handler
					</h1>
					<div className="hidden lg:block lg:w-1/3 px-3 lg:px-6">
						<div className="flex justify-end items-center text-grey">
							<a className="block flex items-center text-black hover:text-grey-darker mr-6" href="https://github.com/ClaraAmeller">
								<span className="text-2xl">
									<i className="fab fa-github"></i>
								</span>
							</a>
							<a className="block flex items-center text-black hover:text-grey-darker mr-6" href="https://linkedin.com/in/claraameller">
								<span className="text-2xl">
									<i className="fab fa-linkedin"></i>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div >
);

export default Header;