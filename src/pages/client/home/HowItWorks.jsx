import React from "react";

export const HowItWorks = () => {
	return (
		<div className="w-full px-2 py-8 bg-secondary xl:py-0 text-primary">
			<div className="container mx-auto xl:py-8 sm:px-2">
				<div className="flex flex-col xl:py-8">
					<div className="flex items-center justify-center mb-8 xl:mb-16">
						<h2 className="text-lg font-bold md:text-xl lg:text-2xl">
							HOW IT WORKS?
						</h2>
					</div>
					<div className="flex flex-col gap-4 md:gap-8 md:px-2 text-secondary">
						<div className="flex flex-col items-center md:mx-auto md:flex-row">
							<img
								src="book.webp"
								className="max-w-[300px] shadow-lg shadow-secondary -bottom-6 md:bottom-0 md:left-6 lg:left-8 sm:max-w-[320px] relative lg:max-w-[420px] rounded-none"
								width={460}
								height={460}
								alt="Booking"
							/>
							<div className="flex justify-center w-[320px] sm:w-[340px] lg:w-[460px] h-[320px] sm:h-[340px] lg:h-[460px] flex-col gap-4 p-4 pt-10 md:pt-4 md:pl-10 rounded-none bg-primary lg:p-8 lg:pl-16">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Book
								</h3>
								<p className="opacity-75">
									Tell us when, where, and what for - we&apos;ll hook you up
									with the right photographer.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mx-auto md:flex-row-reverse">
							<img
								src="plan.webp"
								className="max-w-[300px] shadow-lg shadow-secondary -bottom-6 md:bottom-0 md:right-6 lg:right-8 sm:max-w-[320px] relative lg:max-w-[420px] rounded-none"
								width={460}
								height={460}
								alt="Planning"
							/>
							<div className="flex justify-center w-[320px] sm:w-[340px] lg:w-[460px] h-[320px] sm:h-[340px] lg:h-[460px] flex-col gap-4 p-4 pt-10 md:pt-4 md:pr-10 rounded-none bg-primary lg:p-8 lg:pr-16">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Plan
								</h3>
								<p className="opacity-75">
									Your photographer is set to chat and plan the shoot with you
									using our WhatsApp contact.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mx-auto md:flex-row">
							<img
								src="shot.webp"
								className="max-w-[300px] shadow-lg shadow-secondary -bottom-6 md:bottom-0 md:left-6 lg:left-8 sm:max-w-[320px] relative lg:max-w-[420px] rounded-none"
								width={460}
								height={460}
								alt="Photoshoot"
							/>
							<div className="flex justify-center w-[320px] sm:w-[340px] lg:w-[460px] h-[320px] sm:h-[340px] lg:h-[460px] flex-col gap-4 p-4 pt-10 md:pt-4 md:pl-10 rounded-none bg-primary lg:p-8 lg:pl-16">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Shoot
								</h3>
								<p className="opacity-75">
									Your photographer is equipped with top gear, arriving
									punctually to capture your moments and make it a fantastic
									time.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mx-auto md:flex-row-reverse">
							<img
								src="delivery.webp"
								className="max-w-[300px] shadow-lg shadow-secondary -bottom-6 md:bottom-0 md:right-6 lg:right-8 sm:max-w-[320px] relative lg:max-w-[420px] rounded-none"
								width={460}
								height={460}
								alt="Delivery file"
							/>
							<div className="flex justify-center w-[320px] sm:w-[340px] lg:w-[460px] h-[320px] sm:h-[340px] lg:h-[460px] flex-col gap-4 p-4 pt-10 md:pt-4 md:pr-10 rounded-none bg-primary lg:p-8 lg:pr-16">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Delivery
								</h3>
								<p className="opacity-75">
									You&apos;ll get your photos in 48 hours or less after your
									session, ready for direct download to your devices.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
