"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

export function HeroImg() {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black dark:bg-opacity-65 border-white/[0.2] rounded-xl p-6 border'>
				<CardItem translateZ='100' className='mt-4'>
					<div className='h-[280px] w-[200px] md:h-[380px] md:w-[300px] xl:h-[480px] xl:w-[400px] relative'>
						<Image
							src={"/crbrs-hero.png"}
							alt='crbrs 3d dog'
							fill
							className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
							sizes='90vw'
						/>
					</div>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}
