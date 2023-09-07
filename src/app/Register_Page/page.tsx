"use client";

import { useState, useEffect } from "react";

export default function Register() {
  return (
    <div className='flex justify-center items-center h-screen mb-4'>
      <form className='flex flex-col'>
        <label>First Name</label>
        <label>Last Name</label>
      </form>
    </div>
  );
}
