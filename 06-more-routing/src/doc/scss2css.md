SASS 2 CSS NOTES
----------------
Just a place to capture some common SCSS to CSS translations as a reference. While SCSS is in itself quite readable and understandable, I have this captured here to think about the correct way to use scope for css-module. In this case, the question is should .active class be nested and if so, how do we reference it using css-module in the component.

### Case 1: .active has different style when in primary-header

```scss
.primary-header {
  display: flex;
  nav {
    flex: 1;
    margin-left: 2em;
    border-bottom: 2px solid #555;

    a {
      display: inline-block;
      padding: 0.3em 1em;
      color: #555;

      &:hover {
        background-color: #eee;
      }

      &.active {
        background-color: #555;
        color: #fff;
      }
    }
  }
}
```

```css
.primary-header {
  display: flex;
}
.primary-header nav {
  flex: 1;
  margin-left: 2em;
  border-bottom: 2px solid #555;
}
.primary-header nav a {
  display: inline-block;
  padding: 0.3em 1em;
  color: #555;
}
.primary-header nav a:hover {
  background-color: #eee;
}
.primary-header nav a.active {
  background-color: #555;
  color: #fff;
}
```

### Case 2: .active has different style when in user-sub-layout

```scss
.user-sub-layout {
  display: flex;

  aside {
    width: 200px;
    nav a {
      color: #333;
      padding: 0.2em 1em;
      display: block;
      &.active {
        background-color: #555;
        color: #fff;
      }
    }
  }
  .primary-content {
    flex: 1;
    margin-left: 2em;
  }
}
```

```css
.user-sub-layout {
  display: flex;
}
.user-sub-layout aside {
  width: 200px;
}
.user-sub-layout aside nav a {
  color: #333;
  padding: 0.2em 1em;
  display: block;
}
.user-sub-layout aside nav a.active {
  background-color: #555;
  color: #fff;
}
.user-sub-layout .primary-content {
  flex: 1;
  margin-left: 2em;
}
```
