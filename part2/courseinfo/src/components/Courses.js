import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Courses = ({ courses }) => (
  <>
    <h1>Web development curriculum</h1>
    {courses.map((course) => (
      <div key={course.id}>
        <Header head={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    ))}
  </>
);

export default Courses;